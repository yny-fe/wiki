<template>
  <p class="yellow-text">{{txt}}</p>
</template>
<script type="text/javascript">
  export default {
    name: "TextYellow",
    props: {
      txt: String
    }
  }
</script>
<style type="text/css">
  .yellow-text {
    background: yellow;
    display: inline-block;
    color: #000;
    padding: 0;
    margin: 0;
  }
</style>