<template>
  <section id="task" class="container-custom-row">
    <!-- checbox -->
    <b-checkbox id="checkbox" size="is-medium" type="is-client"></b-checkbox>
    <!-- task description -->
    <div id="description">{{task.description}}</div>
    <!-- due date / TO DO -->
    <date id="date" :date="task.date" :format="'weekday dd shortMonth'"></date>
  </section>
</template>

<script>
import date from "@/components/utils/date";
export default {
  props: ["task"],
  components: {
    date
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/global";

#task {
  height: 50px;
  width: 100%;
  padding: 0 2%;
  font-size: 20px;
  justify-content: flex-start;
}

#description {
  margin-right: 30px;
  // text-decoration: line-through;
}

#date {
  font-size: 12px;
  justify-self: flex-end;
  display: block;
  // margin-left: auto;
}

#checkbox {
  margin-right: 15px;
}
</style>