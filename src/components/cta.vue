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
      @cache="cache"
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
  data: function() {
    return {
      bgColor: "#FF4500",
      position: "bottom-right",
      size: "small",
      positionType: "absolute",
      fixedToolip: false,
      fabActions: [
        {
          name: "Communication",
          icon: "today"
        },
        {
          name: "Ticket",
          icon: "description"
        }
      ]
    };
  },
  methods: {
    cache() {
      console.log("Cache Cleared");
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