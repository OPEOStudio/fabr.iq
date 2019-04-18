<template>
  <section id="task" class="container-custom-row">
    <!-- checbox -->
    <b-checkbox v-model="done" id="checkbox" size="is-medium" type="is-client"></b-checkbox>
    <!-- task description -->
    <div v-if="!done" class="description not-done">{{task.description}}</div>
    <div v-else class="description done">{{task.description}}</div>
    <!-- due date / TO DO -->
    <date id="date" :date="task.date" :format="'weekday dd shortMonth'"></date>
  </section>
</template>

<script>
import date from "@/components/utils/date";
export default {
  props: ["task"],
  data: function() {
    return {
      done: false
    };
  },
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

.description {
  margin-right: 30px;
}

.done {
  text-decoration: line-through;
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