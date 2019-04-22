<template>
  <section class="container-custom">
    <!-- NAVBAR -->
    <navbar></navbar>

    <!-- MAIN SECTION -->
    <section id="home" class="container-custom">
      <!-- Today's date -->
      <div id="date" class="container-custom-row">
        <div class="emoji">🗓</div>
        <date :date="today" :format="'full'"></date>
      </div>

      <hr>

      <!-- TEAM BLOCK -->
      <teamBlock></teamBlock>

      <!-- TASK BLOCK -->
      <taskBlock></taskBlock>

      <!-- CTA BUTTON -->
      <cta id="desktop-cta" :type="'desktop'"></cta>
      <cta id="mobile-cta" :type="'bottom-right'"></cta>
    </section>
  </section>
</template>

<script>
import navbar from "@/components/navbar";
import teamBlock from "@/components/teamBlock";
import taskBlock from "@/components/taskBlock";
import cta from "@/components/cta";
import date from "@/components/utils/date";

export default {
  components: {
    navbar,
    teamBlock,
    taskBlock,
    cta,
    date
  },
  data: function() {
    return {
      taskBlock: "open",
      today: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#home {
  // padding: 0 3%;
  background-color: $white-background;
  min-height: 80vh;
}

hr {
  width: 100%;
  height: 5px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: $very-light-background;
  color: $very-light-background;
}

#date {
  justify-content: center;
  align-content: flex-end;
  height: 60px;
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
}

#title-row {
  justify-content: flex-start;
  align-content: flex-end;
  height: 50px;
}

.chevron {
  font-size: 24px;
  display: block;
  margin-right: 15px;
}

.emoji {
  margin-right: 15px;
}

#category {
  font-size: 30px;
  font-weight: bold;
  margin-right: 15px;
}

#ticket-count {
  font-size: 15px;
  justify-self: flex-end;
  // font-weight: bold;
}

//--------------------------------------------------------
// -------------------- Media queries --------------------
//--------------------------------------------------------

// Small Screen - 600px or less
@media only screen and (max-width: 600px) {
  #desktop-cta {
    display: none;
  }
}

// Medium Screen - 600 to 1000 px
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  #desktop-cta {
    display: none;
  }
}

// Large Screen - above1000 px
@media only screen and (min-width: 1000px) {
  #mobile-cta {
    display: none;
  }
}
</style>
