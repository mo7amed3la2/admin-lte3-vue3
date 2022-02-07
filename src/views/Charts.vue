<template>
  <BarChart :chartData="testData" />
  <LineChart :chartData="testData" />
  <DoughnutChart :chartData="testData" />
  <PieChart :chartData="testData" />
  <PolarAreaChart :chartData="testData" />
  <RadarChart :chartData="testData" />
  <BubbleChart :chartData="testData" />
  <ScatterChart :chartData="testData" />
</template>

<script>
import { defineComponent } from "vue";
import {
  BarChart,
  LineChart,
  DoughnutChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  BubbleChart,
  ScatterChart,
} from "vue-chart-3";

export default defineComponent({
  name: "Home",
  components: {
    BarChart,
    LineChart,
    DoughnutChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    BubbleChart,
    ScatterChart,
  },
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
