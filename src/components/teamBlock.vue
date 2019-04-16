<template>
  <section id="team-block" class="container-custom">
    <div id="title-row" class="container-custom-row">
      <div class="chevron" v-if="status == 'closed'" @click="status = 'open'">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      <div class="chevron" v-if="status == 'open'" @click="status = 'closed'">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
      <div id="category">Mes équipes</div>
      <div id="team-count">{{teams.length}} équipes</div>
    </div>
    <hr>
    <div id="team-list" class="container-custom-row" v-if="status == 'open'">
      <router-link
        class="team container-custom"
        v-for="team in teams"
        :key="team.name"
        to="teampage"
      >
        <img class="team-logo" :src="team.logo" :alt="team.name">
        <div class="team-name">{{team.name}}</div>
      </router-link>
    </div>
    <!-- <img src="../../assets/psm2.png"> -->
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      teams: [
        {
          name: "SOL/SOL3",
          logo:
            "https://res.cloudinary.com/caju/image/upload/v1555308386/psm2_gzlrvd.png"
        },
        {
          name: "SOL",
          logo:
            "https://res.cloudinary.com/caju/image/upload/v1555308386/psm3_c2sjmg.png"
        }
      ],
      status: "open"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#team-block {
  margin-top: 40px;
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

#category {
  font-size: 30px;
  font-weight: bold;
  margin-right: 15px;
}

#team-count {
  font-size: 15px;
  justify-self: flex-end;
  margin-top: 7px;
}

hr {
  width: 100%;
  margin: 10px 0;
}

#team-list {
  justify-content: flex-start;
  margin-top: 10px;
}

.team {
  height: 130px;
  width: 220px;
  border: solid 1px $border-color;
  border-radius: 4px;
  margin-right: 20px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
}

.team-logo {
  height: 80px;
  display: block;
  margin-bottom: 5px;
}

.team-name {
  justify-self: flex-end;
}
</style>