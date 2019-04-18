<template>
  <div id="cta">
    <!-- VUE-FAB -->
    <fab
      :actions="fabActions"
      :bg-color="bgColor"
      :position="position"
      :position-type="positionType"
      :size="size"
      :fixed-tooltip="fixedTooltip"
      @ticket="ticket"
      @alertMe="alert"
    ></fab>
  </div>
</template>

<script>
import fab from "vue-fab";
export default {
  components: {
    fab
  },
  props: ["type"],
  data: function() {
    return {
      bgColor: "#FF4500",
      position: this.type,
      size: "small",
      positionType: "absolute",
      fixedTooltip: true,
      fabActions: [
        {
          name: "communication",
          icon: "today"
        },
        {
          name: "ticket",
          icon: "description"
        }
      ]
    };
  },
  methods: {
    ticket() {
      this.$router.push("ticket");
    },
    alert() {
      alert("Clicked on alert icon");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/global";

// BUEFY
.cta-btn {
  background-color: $caju-orange;
  height: 80px;
  width: 80px;
  color: $caju-font-light;
  font-size: 30px;
  border-color: transparent;
  border-radius: 100%;
  margin-right: 15px;
  position: fixed;
  bottom: 100px;
  right: 40px;
}

.cta-btn:focus {
  outline: 0;
}

// BUEFY
</style>