<template>
  <section id="ticket" class="container-custom-row">
    <!-- LEFT PANEL -->
    <div id="left-panel" class="container-custom">
      <div id="ticket-title">Panne sur la machine numéro 12 décoletage</div>
      <div
        id="ticket-description"
      >{{ticket}} — Une pièce est tombée dans la machine et je ne savais pas quoi faire pour la relancer. La machine est arrêtée depuis 15h. 😩</div>
      <div id="ticket-author" class="container-custom-row">
        <user id="user"></user>
        <date id="date" :date="date" :format="'full-no-year'"></date>
      </div>
    </div>

    <!-- RIGHT PANEL -->
    <div id="right-panel">
      <thumbnail></thumbnail>
    </div>
  </section>
</template>

<script>
import date from "@/components/utils/date";
import user from "@/components/utils/user";
import thumbnail from "@/components/utils/thumbnail";

export default {
  components: {
    date,
    user,
    thumbnail
  },
  props: ["ticket"],
  data: function() {
    return {
      date: new Date()
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/global";

#ticket {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 10px;
  width: 100%;
  border: solid 1px transparent;
  background-color: $very-light-background;
  border-radius: 4px;
  margin-top: 18px;
  height: 120px;
  box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
  cursor: pointer;
}

#left-panel {
  height: 100%;
  width: 50%;
  background: transparent;
}

#right-panel {
  margin-left: auto;
}

#ticket-title {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  background: transparent;
}

#ticket-description {
  width: 100%;
  font-size: 14px;
  text-align: left;
  background: transparent;
}

#ticket-author {
  margin-top: auto;
  margin-right: auto;
  font-size: 12px;
  justify-content: flex-start;
  background-color: transparent;
}

#user {
  margin-right: 10px;
}
</style>