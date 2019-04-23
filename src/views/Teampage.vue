<template>
  <section id="teampage">
    <!-- Navbar -->
    <navbar></navbar>

    <!-- TABS BAR -->
    <div id="tabs" class="container-custom-row">
      <div
        :class="tab == 'board' ? 'container-custom-row first tab active' : 'container-custom-row first tab inactive'"
        @click="tab = 'board'"
      >
        <div class="emoji">📌</div>
        <div class="tab-title">Tableau</div>
      </div>
      <div
        :class="tab == 'performance' ? 'container-custom-row middle tab active' : 'container-custom-row middle tab inactive'"
        @click="tab = 'performance'"
      >
        <div class="emoji">📈</div>
        <div class="tab-title">Performance</div>
      </div>
      <div
        :class="tab == 'news' ? 'container-custom-row last tab active' : 'container-custom-row last tab inactive'"
        @click="tab = 'news'"
      >
        <div class="emoji">📰</div>
        <div class="tab-title">Communication</div>
      </div>
    </div>
    <hr>

    <!-- ALL BOARDS -->
    <transition name="slide-fade">
      <board v-if="tab == 'board'"></board>
    </transition>
    <transition name="slide-fade">
      <div class="container-custom" v-if="tab == 'news'">NEWS</div>
    </transition>
    <transition name="slide-fade">
      <div class="container-custom" v-if="tab == 'performance'">PERFORMANCE</div>
    </transition>

    <!-- CTA BUTTON -->
    <cta id="desktop-cta" :type="'desktop'"></cta>
    <cta id="mobile-cta" :type="'bottom-right'"></cta>
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
  height: 5px;
  margin-top: 0;
  margin-bottom: 60px;
  background-color: $very-light-background;
  color: $very-light-background;
}

#tabs {
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
  height: 60px;
}

.emoji {
  margin-right: 15px;
}

.tab {
  font-family: $font-stack;
  margin: 0 10px;
  width: 280px;
  font-size: 26px;
  border-color: tranparent;
  background-color: transparent;
  padding: 5px 10px;
  cursor: pointer;
}

.active {
  font-weight: bold;
  border-bottom: solid 3px $primary-color;
}

//--------------------------------------------------------
// -------------------- Transitions  ---------------------
//--------------------------------------------------------

.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.2s;
}

.slide-fade-leave {
  transform: translateY(100px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
  transition-delay: 0.1s;
}

//--------------------------------------------------------
// -------------------- Media queries --------------------
//--------------------------------------------------------

// Small Screen - 600px or less
@media only screen and (max-width: 600px) {
  .tab-title {
    display: none;
  }

  .emoji {
    margin-right: 0;
  }

  #desktop-cta {
    display: none;
  }
}

// Medium Screen - 600 to 1000 px
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  #desktop-cta {
    display: none;
  }

  .tab {
    font-size: 23px;
    width: 200px;
  }
}

// Large Screen - above1000 px
@media only screen and (min-width: 1000px) {
  #mobile-cta {
    display: none;
  }
}
</style>
