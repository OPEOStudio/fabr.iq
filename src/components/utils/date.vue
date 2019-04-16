<template>
  <span v-if="date">
    <span v-if="format == 'full'">{{weekDay}} {{day}} {{monthText}} {{fullYear}}</span>
    <span v-if="format == 'weekday dd/mm'">{{weekDay}} {{day}}/{{monthNum}}</span>
    <span v-if="format == 'weekday dd/mm/yy'">{{weekDay}} {{day}}/{{monthNum}}/{{twoDigitYear}}</span>
    <span v-if="format == 'full-no-weekday'">{{day}} {{monthText}} {{fullYear}}</span>
    <span v-if="format == 'full-no-year'">{{weekDay}} {{day}} {{monthText}}</span>
    <span v-if="format == 'weekday-only'">{{weekDay}}</span>
    <span v-if="format == 'day-only'">{{day}}</span>
    <span v-if="format == 'month-only'">{{monthText}}</span>
    <span v-if="format == 'day-month'">{{day}} {{monthText}}</span>
    <span v-if="format == 'dd/mm'">{{day}}/{{monthNum}}</span>
    <span v-if="format == 'dd/mm/yy'">{{day}}/{{monthNum}}/{{twoDigitYear}}</span>
    <span v-if="format == 'dd/mm/yyyy'">{{day}}/{{monthNum}}/{{fullYear}}</span>
    <span v-if="format == 'weekday dd shortMonth'">{{weekDay}} {{day}} {{shortMonthText}}</span>
  </span>
</template>
<script>
export default {
  props: ["date", "format"],
  data: function() {
    return {
      months: [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
      ],
      shortMonths: [
        "jan",
        "fév",
        "mar",
        "avr",
        "mai",
        "juin",
        "juil",
        "août",
        "sep",
        "oct",
        "nov",
        "déc"
      ],
      days: [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
      ]
    };
  },
  computed: {
    weekDay: function() {
      return this.days[this.date.getDay()];
    },
    day: function() {
      return parseInt(this.date.toISOString().slice(8, 10));
    },
    monthNum: function() {
      return parseInt(this.date.toISOString().slice(5, 7));
    },
    monthText: function() {
      return this.months[parseInt(this.date.toISOString().slice(5, 7)) - 1];
    },
    shortMonthText: function() {
      return this.shortMonths[
        parseInt(this.date.toISOString().slice(5, 7)) - 1
      ];
    },
    fullYear: function() {
      return parseInt(this.date.toISOString().slice(0, 4));
    },
    twoDigitYear: function() {
      return parseInt(this.date.toISOString().slice(2, 4));
    }
  }
};
</script>
<style lang="scss" scoped></style>