<template>
  <section id="teampage">
    <!-- Navbar -->
    <navbar></navbar>

    <!-- TABS BAR -->
    <div id="tabs" class="container-custom-row">
      <div
        :class="tab == 'board' ? 'first tab active' : 'first tab inactive'"
        @click="tab = 'board'"
      >📌 Tableau</div>
      <div
        :class="tab == 'news' ? 'middle tab active' : 'middle tab inactive'"
        @click="tab = 'news'"
      >📰 Communication</div>
      <div
        :class="tab == 'performance' ? 'last tab active' : 'last tab inactive'"
        @click="tab = 'performance'"
      >📈 Performance</div>
    </div>
    <hr>

    <!-- ALL BOARDS -->
    <board v-if="tab == 'board'"></board>
    <div class="container-custom" v-if="tab == 'news'">NEWS</div>
    <div class="container-custom" v-if="tab == 'performance'">PERFORMANCE</div>

    <!-- CTA BUTTON -->
    <cta></cta>
  </section>
</template>
<script>
import board from "@/components/board";
import navbar from "@/components/navbar";
import cta from "@/components/cta";

export default {
  components: {
    navbar,
    board,
    cta
  },
  data: function() {
    return {
      tab: "board"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/global";

#teampage {
  background-color: $white-background;
  min-height: 100vh;
}

hr {
  width: 100%;
  height: 1px;
  margin-top: 0;
  background-color: $very-light-background;
  color: $very-light-background;
}

#tabs {
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  margin-top: 40px;
}

.tab {
  font-family: $font-stack;
  margin: 0 10px;
  font-size: 26px;
  border-color: tranparent;
  background-color: transparent;
  padding: 5px 10px;
}

.active {
  font-weight: bold;
  border-bottom: solid 3px $primary-color;
}
</style>
