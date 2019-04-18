<template>
  <section>
    <div id="thumbnail-photo" :style="{ backgroundImage: 'url(' + photos[0] + ')' }"></div>

    <!-- <vue-litebox v-show="showLitebox" :items="photos" @close="closeLB"></vue-litebox> -->

    <!-- <b-modal :active.sync="isImageModalActive" :height="600">
      <p class="image is-4by3">
        <img :src="photos[0]">
      </p>
    </b-modal>-->
  </section>
</template>
<script>
// import VueLitebox from "vue-litebox";

export default {
  // components: {
  //   VueLitebox
  // },
  data: function() {
    return {
      photos: [
        "https://res.cloudinary.com/caju/image/upload/v1555595070/WhatsApp_Image_2019-04-17_at_18.05.51_lnlzxy.jpg"
      ]
      // isImageModalActive: false
      // showLitebox: false
    };
  }
  // methods: {
  //   openLB() {
  //     this.showLitebox = true;
  //   },
  //   closeLB() {
  //     this.showLitebox = false;
  //   }
  // }
};
</script>
<style lang="scss" scoped>
@import "../../assets/global";

#thumbnail-photo {
  height: 100px;
  width: 100px;
  background-position: center;
  background-size: cover;
  opacity: 1;
  border: none;
}
</style>