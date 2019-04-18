<template>
  <h2>
    Width: {{ window.width }},
    Height: {{ window.height }}
  </h2>
</template>
<script>
export default {
  data: {
    window: {
      width: 0,
      height: 0
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>