
### 总体思路说明
1.首先设置一个_themes.scss文件,这是定义你的俩套主题色或者n套主题色的各个属性值颜色的声明，这里以dark和light俩套主题色为例。     
2.通过给js全局加上自定义属性，并附上你在 _themes.scss文件声明主题色名称，可以实现动态切换。 
```js                            
window.document.documentElement.setAttribute( data-theme, 'light');
```
#### 注意点
当HTML的data-theme为light时，样式引用light
data-theme为其他值时，就采用组件库的默认样式
这里我只定义了两套主题方案，想要再多只需在`_themes.scss`里加就行了
注意一点是，每套配色方案里的key可以自定义但必须一致，不然就会混乱


#### 第一步：创建_themes.scss文件 格式如下
```scss
$themes: (

    light: (
        //字体
        font_color1: #414141,
        font_color2: white,
        
        //背景
        background_color1: #fff,
        background_color2: #f0f2f5,
        background_color3: red,
        background_color4: #2674e7,
        
        //边框
        border_color1: #3d414a,
    
    ),
    
    dark: (
        //字体
        font_color1: #a7a7a7,
        font_color2: white,
        
        //背景
        background_color1: #1b2531,
        background_color2: #283142,
        background_color3: #1e6ceb,
        background_color4: #323e4e,
    
        //边框
        border_color1: #3d414a,
    
    )
);

```


#### 第二步：创建_handle.scss文件 逻辑如下
```scss
@import "./_themes.scss";
// @import url(./_themes.scss);
//遍历主题map
@mixin themeify {
    @each $theme-name, $theme-map in $themes {
        //!global 把局部变量强升为全局变量
        $theme-map: $theme-map !global;
        //判断html的data-theme的属性值  #{}是sass的插值表达式
        //& sass嵌套里的父容器标识   @content是混合器插槽，像vue的slot
        [data-theme="#{$theme-name}"] & {
            @content;
        }
    }
}
//声明一个根据Key获取颜色的function
@function themed($key) {
    @return map-get($theme-map, $key);
}
//获取背景颜色
@mixin set_theme($background_color:background_color1,$font_color:font_color1,$border_color:border_color1) {
    @include themeify {
        @if themed($background_color)==null {
            background-color: themed(background_color1) !important;
        }@else{
            background-color: themed($background_color)!important;
        }
    }
    @include themeify {
        @if themed($font_color)==null {
            color: themed(font_color1) !important;
        }@else{
            color: themed($font_color)!important;
        }
    }
    @include themeify {
        @if themed($border_color)==null {
            border-color: themed(border_color1) !important;
        }@else{
            border-color: themed($border_color)!important;
        }
    }
}

```




#### 第三步：@include set_theme()的使用
- 1
    - 不传值会按照默认的相应的主题色来设置 各个css属性值，
- 2
    - 传值会去遍历相应主题 _theme.scss文件的键，设置css属性值

```scss
    // @import "../../../../theme/handle";
    @import '~@/theme/handle';
    .trip-cart-btm-bar.nav-btmbar-container {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      border-top: 1px solid #e4e4e4;
      @include set_theme();
```



