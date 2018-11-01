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
  constructor() {}

  ngOnInit() {
    console.log("hello world");
    this.showChart();
  }

  ngAfterViewInit() {
    this.showChart();
    console.log(this.chart.chart);
  }
  showChart(){
    this.context = (<HTMLCanvasElement>this.lineChart.nativeElement).getContext('2d');
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
}
