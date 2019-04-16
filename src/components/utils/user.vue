<template>
  <div id="user">
    <div id="background-photo" :style="{ backgroundImage: 'url(' + photo + ')'}">
      <div id="initials" :title="name">{{initials}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      name: "Octave Lapeyronie",
      initials: "OL",
      photo:
        "https://res.cloudinary.com/caju/image/upload/v1555313650/Cropped_url90l.png"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/global";
#user {
  height: 25px;
  width: 25px;
  font-size: 12px;
  border-radius: 100%;
  margin: 0 3px 0 0;
  border: none;
}

#background-photo {
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: url("http://cusbor.com/wp-content/uploads/2015/03/base1.jpg")
    no-repeat center center;
  background-size: cover;
  opacity: 1;
  border: none;
}

#initials {
  height: 25px;
  width: 25px;
  border-radius: 100%;
  line-height: 25px;
  background: $white-background;
  border: none;
}

#initials:hover {
  opacity: 0;
}
</style>