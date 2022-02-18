<template>
  <div style="display:inline-block">
    <template  v-if="!allColor"  >
      <div class="color-card" >
        <a   href="javascript:;" :title="'点击复制' + color">
          <input type="text"  id="input" :value="color">
          <!-- data-clipboard-target="#input" -->
          <span  :data-clipboard-text="name"  @click="clickColorCard(color)"  class="color-card-container"   :style="{ backgroundColor: color }"></span></a>
        <small>{{ desc }}</small>
        <small>{{ name }}</small>
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
  // import ClipboardJS from "clickboard";
  // console.log(ClipboardJS);
  // const ClipboardJS = require("clickboard");
  // console.log(ClipboardJS);
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
      clickColorCard(color){


        var clipboard = new ClipboardJS('.color-card-container');

        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

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
