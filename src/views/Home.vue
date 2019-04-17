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

      <!-- TEAM BLOCK -->
      <teamBlock></teamBlock>

      <!-- TASK BLOCK -->
      <taskBlock></taskBlock>

      <!-- CTA BUTTON -->
      <cta></cta>
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
  padding: 0 3%;
  background-color: $white-background;
  min-height: 80vh;
}

#date {
  justify-content: center;
  align-content: flex-end;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
}

#team-block {
  margin-top: 30px;
}

#task-block {
  margin-top: 30px;
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

hr {
  width: 100%;
  margin: 10px 0;
}
</style>
