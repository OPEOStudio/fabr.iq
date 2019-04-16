<template>
  <section id="block" class="container-custom">
    <!--TITLE ROW -->
    <div id="title-row" class="container-custom-row">
      <div class="chevron" v-if="status == 'closed'" @click="status = 'open'">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      <div class="chevron" v-if="status == 'open'" @click="status = 'closed'">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
      <div id="category">{{block}}</div>
      <div id="ticket-count">5 tickets</div>
    </div>
    <hr>
    <transition name="slide-fade">
      <div class="container-custom" v-if="status == 'open'">
        <ticket v-for="ticket in tickets" :ticket="ticket" :key="ticket"></ticket>
      </div>
    </transition>
  </section>
</template>

<script>
import ticket from "@/components/ticket";
export default {
  components: {
    ticket
  },
  props: ["block"],
  data: function() {
    return {
      tickets: ["Panne", "Souci", "Problème", "Croissants", "Absence"],
      status: "closed"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#block {
  margin-bottom: 15px;
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

#ticket-count {
  font-size: 15px;
  justify-self: flex-end;
  // font-weight: bold;
}

hr {
  width: 100%;
  margin: 10px 0;
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
</style>