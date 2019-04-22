<template>
  <section id="board" class="container-custom">
    <!-- <transition name="slide-fade"> -->
    <ticketBlock v-for="(category, i) in categories" :category="category" :key="i"></ticketBlock>
    <!-- </transition> -->
  </section>
</template>

<script>
import ticketBlock from "@/components/ticketBlock";
export default {
  components: {
    ticketBlock
  },
  data: function() {
    return {
      categories: [
        {
          name: "HSE",
          value: "hse",
          icon: "security"
        },
        {
          name: "Qualité",
          value: "quality",
          icon: "check_circle"
        },
        {
          name: "Logistique",
          value: "logistics",
          icon: "timer"
        },
        {
          name: "Production",
          value: "production",
          icon: "playlist_add_check"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#board {
  padding: 0 3%;
  margin-top: 40px;
}

hr {
  width: 100%;
  height: 1px;
  margin-top: 0;
  background-color: $very-light-background;
  color: $very-light-background;
}
</style>