<template>
  <div class="mobile-box">
    <iframe :src="location" width="320px" height="568px"></iframe>
  </div>
</template>
<script>
export default {
  name: "DemoMobile",
  props: {
    location: String
  }
};
</script>
<style type="text/css">
.mobile-box {
  z-index: 10;
  position: fixed;
  right: 0px;
  top: 0px;
  background-image: url('./images/phone.png');
  background-size: 100%;
  width: 352px;
  height: 768px;
  overflow:  hidden;
  background-repeat: no-repeat;
}
.mobile-box  iframe {
  border: none;
  background: #fff;
  display: block;
  margin: 90px auto;
}
</style>
