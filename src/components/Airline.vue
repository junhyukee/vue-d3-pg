<template>
  <div class="airline">
    <h1>Airline Safety</h1>
    <p>{{ message }}</p>
    <p>{{ airlineData }}</p>
  </div>
</template>

<script>
import * as d3 from "d3";

d3.csv("../data/airline-safety.csv").then(res => {
  console.log(res);
});

export default {
  name: "airline",
  data() {
    return {
      airlineData: [],
      message: "testing"
    };
  },
  created() {}
};
</script>

<style>
</style>