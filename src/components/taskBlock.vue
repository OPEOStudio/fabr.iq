<template>
  <section id="task-block" class="container-custom">
    <div id="title-row" class="container-custom-row">
      <div class="chevron" v-if="status == 'closed'" @click="status = 'open'">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      <div class="chevron" v-if="status == 'open'" @click="status = 'closed'">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
      <div id="category">Mes tâches</div>
      <div id="task-count">{{tasks.length}} tâches</div>
    </div>
    <hr>
    <div id="task-list" class="container-custom" v-if="status == 'open'">
      <task v-for="task in tasks" :task="task" :key="task"></task>
    </div>
  </section>
</template>

<script>
import task from "@/components/task";
export default {
  components: {
    task
  },
  data: function() {
    return {
      tasks: [
        { description: "Acheter des croissants", date: new Date() },
        {
          description: "Éteindre la lumière avant de partir",
          date: new Date()
        },
        { description: "Regarder GoT S08E01", date: new Date() },
        { description: "Produire 53 unités de RHX7676/98", date: new Date() }
      ],
      status: "open"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#task-block {
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

#task-count {
  font-size: 15px;
  justify-self: flex-end;
  margin-top: 7px;
}

hr {
  width: 100%;
  margin: 10px 0;
}
</style>