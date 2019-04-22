<template>
  <section>
    <!-- <Navbar></Navbar> -->
    <section id="login" class="container-custom main-container">
      <div class="row">
        <div class="field">
          <label>ADRESSE EMAIL</label>
          <input
            class="text-input"
            v-model="loginEmail"
            type="email"
            :placeholder="placeholder.emailName + placeholder.emailDomain"
            @keyup.enter="login"
          >
        </div>
      </div>
      <div class="row" v-show="!forgotPassword">
        <div class="field">
          <label>MOT DE PASSE</label>
          <input
            class="text-input"
            v-model="loginPassword"
            type="password"
            placeholder="••••••••••••"
            @keyup.enter="login"
          >
        </div>
      </div>
      <div id="buttons">
        <button v-show="!loading" class="fabriq-btn" @click="login">{{buttonText}}</button>
        <circle-8 v-show="loading"></circle-8>
      </div>
      <div id="forgot-pwd" @click="forgotPassword = !forgotPassword">{{subButtonText.toUpperCase()}}</div>
    </section>
  </section>
</template>
<script>
import api from "@/api";
import { Circle8 } from "vue-loading-spinner";

export default {
  data() {
    return {
      loginPassword: "",
      loginEmail: "",
      forgotPassword: false,
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true; // turn on loading spinner
      let response = await api.userLogin(this.loginEmail, this.loginPassword); // call login route
      if (response.success) {
        await api.loadUser(this); // load user to store
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect); // push to redirect if there is one
        } else {
          this.$router.push("/"); // otherwise just push to home
        }
      } else {
        console.log("not success! :(");
        // TO DO: show error toaster
      }
    }
    // async send() {
    //   this.loading = true;
    //   if (this.forgotPassword) {
    //     // call api to send password reset email
    //     let res = await auth.requestReset(this.loginEmail);
    //     if (res.success) {
    //       this.loading = false;
    //       this.errorMessage =
    //         "An email has been sent to your inbox to reset your password";
    //       this.showError = true;
    //     } else {
    //       this.loading = false;
    //       this.errorMessage =
    //         "If an account exists with this email, an email has been sent to reset the password";
    //       this.showError = true;
    //     }
    //   } else {
    //     // call API to authenticate user and display error if needed
    //     let res = await auth.logIn(this.loginEmail, this.loginPassword, this);
    //     if (res.token) {
    //       this.showError = false;
    //       // if query had a redirect path send to it, otherwise push to order
    //       if (this.$route.query.redirect) {
    //         this.$router.push(this.$route.query.redirect);
    //       } else {
    //         if (this.$store.state.user.type == "supplier") {
    //           this.$router.push("supplier");
    //         } else {
    //           // if user has not yet seen onboarding, send him to it otherwise to order page
    //           if (this.$store.state.user.emailSettings.onBoarding) {
    //             this.$router.push("order");
    //           } else {
    //             this.$router.push("onboarding");
    //           }
    //         }
    //       }
    //     } else {
    //       this.errorMessage = res;
    //       this.loading = false;
    //       this.showError = true;
    //       this.loginPassword = "";
    //     }
    //   }
    // }
  },
  computed: {
    buttonText() {
      return this.forgotPassword ? "Réinitialiser" : "Me connecter";
    },
    subButtonText() {
      return this.forgotPassword
        ? "C'est bon, je m'en suis souvenu"
        : "Mot de passe oublié ?";
    },
    placeholder() {
      let names = [
        {
          firstName: "Clark",
          lastName: "Kent",
          emailName: "clark.kent",
          emailDomain: "@dailyplanet.com"
        },
        {
          firstName: "Lois",
          lastName: "Lane",
          emailName: "lois.lane",
          emailDomain: "@dailyplanet.com"
        },
        {
          firstName: "Marcel",
          lastName: "Patulacci",
          emailName: "marcel.patulacci",
          emailDomain: "@caramail.fr"
        },
        {
          firstName: "Ken",
          lastName: "Adams",
          emailName: "ken.adams",
          emailDomain: "@aol.com"
        },
        {
          firstName: "Kylian",
          lastName: "M'Bappé",
          emailName: "kylian.mbappe",
          emailDomain: "@psg.com"
        }
      ];

      return names[Math.floor(Math.random() * names.length)];
    }
  },
  components: {
    // Navbar,
    // Foot,
    Circle8
  }
};
</script>
<style scoped lang='scss'>
@import "../assets/global";

#login {
  min-height: 100vh;
  justify-content: flex-start;
  padding-top: 20vh;
}

h1 {
  font-size: 30px;
  margin: 70px 0 30px;
}

.field {
  width: 450px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-input {
  margin-top: 10px;
  font-size: 30px;
  width: 100%;
}

#buttons {
  margin-top: 20px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.caju-btn {
  font-size: 20px;
}

#forgot-pwd {
  margin-top: 20px;
  font-size: 12px;
  cursor: pointer;
}

#forgot-pwd:hover {
  text-decoration: underline;
  color: $caju-orange;
}

#notif {
  min-height: 70px;
}

//--------------------------------------------------------
// -------------------- Media queries --------------------
//--------------------------------------------------------

// Small Screen - 600px or less
@media only screen and (max-width: 600px) {
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .field {
    width: 95%;
  }

  .input-line {
    font-size: 20px;
  }
}

// Medium Screen - 600 to 1000 px
@media only screen and (min-width: 600px) and (max-width: 1000px) {
}
</style>
