import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-chart-js",
  templateUrl: "./chart-js.component.html",
  styleUrls: ["./chart-js.component.scss"]
})
export class ChartJsComponent implements OnInit, AfterViewInit {
  @ViewChild("lineChart") lineChart:ElementRef;
  public context : CanvasRenderingContext2D;
  chart: any;

  chart1:Chart;
  constructor() {}

  ngOnInit() {
    console.log("hello world");
    this.showChart();
    this.showchart1();
  }

  ngAfterViewInit() {

  }
  showChart(){
    this.context = this.lineChart.nativeElement.getContext('2d');
    return this.chart = new Chart(this.context, {
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
    });
  }

  showchart1(){
    console.log('hwllo')
    this.chart1 = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Solicitado', 'Entregado', 'Faltante'],
        datasets: [
          {
            label: 'test',
            data: [
              100, 200, 300
            ],
            backgroundColor: ['#0074D9', '#2ECC40', '#FF4136']
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'Color test'
        },
        legend: {
          position: 'left',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 11
          }
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }

 
}
