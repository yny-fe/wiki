<template>
  <div class="color-card">
    <a href="javascript:;" :title="'点击复制' + color"><span :style="{ backgroundColor: color }"></span></a>
    <small>{{ desc }}</small>
    <small>{{ name }}</small>
  </div>
</template>
<script type="text/javascript">
  // import ClipboardJS from "clickboard";
  // console.log(ClipboardJS);
  // const ClipboardJS = require("clickboard");
  // console.log(ClipboardJS);
  export default {
    name: "ColorCard",
    props: {
      color: String,
      desc: String,
      name: String
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
