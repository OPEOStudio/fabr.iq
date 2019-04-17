<template>
  <div id="app">
    <Slideout
      ref="slideout"
      menu="#menu"
      panel=".main-container"
      duration="200"
      :toggleSelectors="['.toggle-button']"
      @on-open="$store.commit('openSlideout')"
      @on-close="$store.commit('closeSlideout')"
    >
      <div id="menu">
        <ul>
          <li class="menu-link">
            <router-link to="/">Accueil</router-link>
          </li>
          <li class="menu-link">
            <router-link to="/workspace">Mes équipes</router-link>
          </li>
          <li class="menu-link">
            <router-link to="/workspace">Mes tâches</router-link>
          </li>
        </ul>
        <img class="toggle-button" id="logo" src="./assets/lisi.png">
      </div>
      <section class="main-container">
        <router-view/>
      </section>
    </Slideout>
  </div>
</template>

<script>
import Slideout from "vue-slideout";

export default {
  name: "app",
  components: {
    Slideout
  }
  // methods: {
  //   closeSlideout() {
  //     this.$refs.slideout.slideout.close();
  //   }
  // }
};
</script>


<style lang="scss">
@import "./assets/global";
@import "./assets/reset";

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $caju-font-dark;
  background-color: $white-background;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: $primary-color;
$primary-invert: findColorInvert($primary);
$client: $primary-color;
$client-invert: findColorInvert($client);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "client": (
    $client,
    $client-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// Slideout menu
.menu-link {
  font-size: 20px;
  margin: 20px 0;
}

.menu-link a {
  color: $caju-font-dark;
}

.menu-link a:hover {
  color: $primary-color;
}

.logout-btn {
  font-size: 14px;
  padding: 7px 10px;
}

#logo {
  width: 20%;
  margin: 20px 0;
}

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background-color: white;
  padding-top: 40px;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  position: relative;
  z-index: 1;
  will-change: transform;
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

#social-links-row {
  margin-top: 30px;
}

.social-link {
  margin: 0 5px;
  color: $caju-font-dark;
}

.social-link:hover {
  color: $primary-color;
}
</style>
