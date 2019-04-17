<template>
  <section class="container-custom">
    <!-- NAVBAR -->
    <!-- <navbar></navbar> -->

    <!-- MAIN SECTION -->
    <section class="container-custom" id="ticket">
      <!-- Page title -->
      <div id="title" class="container-custom-row">
        <div class="emoji">🏷️</div>
        <div>Nouveau ticket</div>
      </div>
    </section>
  </section>
</template>

<script>
import navbar from "@/components/navbar";
import date from "@/components/utils/date";

export default {
  components: {
    navbar,
    date
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#ticket {
  min-height: 100vh;
}

.emoji {
  margin-right: 15px;
}

#title {
  justify-content: center;
  align-content: flex-end;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
}
</style>
