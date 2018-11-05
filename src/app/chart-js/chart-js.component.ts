import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-chart-js",
  templateUrl: "./chart-js.component.html",
  styleUrls: ["./chart-js.component.scss"]
})
export class ChartJsComponent implements OnInit {
  chart: Chart;

  chart1: Chart;
  chart2: Chart;
  constructor() {}

  ngOnInit() {
    console.log("hello world");
    this.showChart();
    this.showchart1();
    this.showchart2();
  }

  showChart() {
    // this.context = this.lineChart.nativeElement.getContext('2d');
    return (this.chart = new Chart("canvas1", {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    }));
  }

  showchart1() {
    console.log("hwllo");
    return (this.chart1 = new Chart("canvas", {
      type: "doughnut",
      data: {
        labels: ["Solicitado", "Entregado", "Faltante"],
        datasets: [
          {
            label: "test",
            data: [100, 200, 300],
            backgroundColor: ["#0074D9", "#2ECC40", "#FF4136"]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: "Color test"
        },
        legend: {
          position: "left",
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 11
          }
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    }));
  }

  showchart2() {
    return (this.chart2 = new Chart("canvas3", {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }));
  }
}
