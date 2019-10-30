<template>
  <mdb-container id="ChartRadarComponent">
    <mdb-radar-chart :data="radarChartData" :options="radarChartOptions" :width="900" :height="400"></mdb-radar-chart>
  </mdb-container>
</template>
<script>
import { mdbRadarChart, mdbContainer } from "mdbvue";
export default {
  name: "ChartRadar",
  props: ["service"],
  components: {
    mdbRadarChart,
    mdbContainer
  },
  watch: {
    data: function() {
      this._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderRadarChart();
    }
  },
  computed: {

  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.renderRadarChart);
      this.renderRadarChart();
    });
  },
  methods: {
    renderRadarChart() {
      if (this.$mq === "mobile") {
        this.radarChartOptions.scale.pointLabels.fontColor = "black";
        console.log(
          "black: ",
          this.radarChartOptions.scale.pointLabels.fontColor
        );
      }
    }
  },
  data() {
    return {
      radarChartData: {
        labels: this.service.labels,
        datasets: [
          {
            label: "Design",
            backgroundColor: "rgba(0, 155, 255, 0.7)",
            pointBackgroundColor: "white",
            borderColor: "rgba(0, 155, 255, 1)",
            borderWidth: 2,
            data: this.service.data
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: false,
          labels: {
            fontColor: "white",
            fontSize: 14
          }
        },
        scale: {
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 33
          },
          gridLines: {
            color: "rgba(34, 36, 126, .5)",
            lineWidth: 2
          },
          angleLines: {
            display: true,
            color: "rgba(34, 36, 126, .5)",
            lineWidth: 2
          },
          pointLabels: {
            fontSize: 14,
            fontColor: "white",
            fontFamily: "Roboto"
          }
        }
      }
    };
  }
};
</script>
<style lang="scss">
#ChartRadarComponent {
  padding: 0;
}
</style>