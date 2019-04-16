<template>
  <section id="board" class="container-custom">
    <ticketBlock v-for="block in blocks" :block="block" :key="block"></ticketBlock>
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
      blocks: ["HSE", "Qualité", "Production", "Logistique", "People"]
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