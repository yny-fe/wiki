<template>
  <div class="pc-box">
    <iframe :src="location" :width="this.width" height="600px"></iframe>
  </div>
</template>
<script>
export default {
  name: "DemoPc",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    location: String
  }
};
</script>
<style type="text/css">
.pc-box  iframe {
  border: none;
  background: #fff;
  display: block;
}
</style>
