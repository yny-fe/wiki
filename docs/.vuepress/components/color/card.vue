<template>
  <div style="display:inline-block">
    <template  v-if="!allColor"  >
      <div class="color-card" >
        <a  v-if="!shadow" href="javascript:;" :title="'点击复制' + color">
          <span  :data-clipboard-text="color"  @click="clickColorCard(`color-card-container`)"  class="color-card-container"   :style="{ backgroundColor: color }"></span>
        </a>
        <a  v-else href="javascript:;" :title="'点击复制' + shadow">
          <span  :data-clipboard-text="shadow"  @click="clickColorCard(`color-card-container`)"  class="color-card-container"   :style="{ boxShadow: shadow }"></span>
        </a>

        <a  @click="clickColorCard(`variable`)"   href="javascript:;" title="点击复制变量">
          <small>{{ desc }}</small>
          <small class="variable" :data-clipboard-text="name">{{ name }}</small>
        </a>

      </div>
    </template>
    <template  v-else>
      <div class="color-card" v-for="(item ,index) in  handleAllColorArr"  :key="index">
        <div   v-if="item">
          <a href="javascript:;" :title="'点击复制' + item"><span :style="{ backgroundColor: item }"></span></a>
          <small>{{ "allColor-"+item}}</small>
          <small>{{ name }}</small>
        </div>
      </div>
    </template>
  </div>
</template>
<script type="text/javascript">
import ClipboardJS from "clipboard";
  export default {
    name: "ColorCard",
    props: {
      color: String,
      desc: String,
      name: String,
      allColor:{
        type:String,
        default:()=>{
          ''
        }
      },
      shadow:{
        type:String,
        default:'',
        require:false
      }
    },
    data(){
      return {
        handleAllColorArr:[]

      }
    },
    methods:{
      handleAllColor(){
        this.handleAllColorArr=  [...new Set(this.allColor.split(' '))]
      },
      clickColorCard(className){
        new ClipboardJS(`.${className}`);
      }
    },
    created(){
      if(this.allColor){
        this.handleAllColor()
        console.log('arr',this.handleAllColorArr)

      }

    }
  };
</script>

<style type="text/css" scoped="scoped">
  .color-card {
    display: inline-block;
    margin: 10px;
  }
  .color-card span {
    display: block;
    width: 150px;
    height: 66px;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
  }
  .color-card small {
    display: block;
    text-align: center;
    height: 20px;
    line-height: 20px;
  }
</style>
