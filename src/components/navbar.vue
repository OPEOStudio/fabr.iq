<template>
  <nav id="navbar">
    <!-- Menu button -->
    <button id="top-left-controls" @click="slideoutToggle">
      <i class="fa fa-times" aria-hidden="true" v-if="$store.state.slideOutOpen"></i>
      <i class="fa fa-bars" aria-hidden="true" v-else></i>
    </button>

    <!-- Logo and name -->
    <router-link id="fabriq-brand" to="/">
      <img id="fabriq-logo" src="../assets/lisi.png">
      <!-- <span id="fabriq-name">fabr.iq</span> -->
    </router-link>

    <!-- Top right menu -->

    <div id="top-right-controls">
      <router-link id="profile-icon" to="/login" class="container-custom-row">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <span id="login-text" v-if="!$store.state.userLoaded">Connexion</span>
        <span id="login-text" v-else>{{$store.state.user.first_name}}</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
// import api from "@/api";
// import bus from "@/bus";
export default {
  name: "navbar",
  methods: {
    slideoutToggle() {
      this.$root.$children[0].$refs.slideout.slideout.toggle();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/global";

section {
  width: 100%;
}

#navbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  align-items: center;
}

#menu-link {
  margin-left: 10px;
  // line-height: 1px;
}

#fabriq-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
}

#fabriq-name {
  font-family: $brand-font;
  font-size: 30px;
  font-weight: 600;
  margin-top: 7px;
}

#fabriq-logo {
  height: 35px;
  // margin-left: 15px;
  // margin-bottom: 2px;
}

#top-left-controls {
  background-color: transparent;
  font-family: $font-stack;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 25px;
}

#top-left-controls:focus {
  outline: 0;
}

#top-left-controls:hover {
  color: $primary-color;
}

#top-right-controls,
#top-left-controls {
  display: flex;
  align-items: center;
  color: $caju-font-dark;
}

#top-left-controls {
  justify-content: flex-start;
}

#top-right-controls {
  justify-content: flex-end;
  margin-left: auto;
}

#profile-icon:hover {
  color: $primary-color;
}

#top-left-controls i {
  margin-right: 5px;
  font-size: 30px;
}

#profile-icon i {
  line-height: 29px;
  font-size: 30px;
}

#profile-icon {
  font-size: 20px;
  justify-content: flex-end;
  width: auto;
}

#name,
#login-text {
  display: block;
  margin-left: 5px;
  margin-top: 2px;
}

hr {
  margin: 0;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.7s ease;
  transition-delay: 0.15s;
}

.slide-fade-enter {
  transform: translatex(-50px);
  opacity: 0;
}

//--------------------------------------------------------
// -------------------- Media queries --------------------
//--------------------------------------------------------

// Small Screen - 600px or less
@media only screen and (max-width: 600px) {
  #caju-name {
    display: none;
  }

  #caju-logo {
    margin-right: 0;
  }

  #login-text,
  #name,
  #credit-text {
    display: none;
  }
}

// Medium Screen - 600 to 1000 px
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  #login-text {
    display: none;
  }
}
</style>
