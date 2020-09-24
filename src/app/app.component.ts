import { Component, OnInit } from "@angular/core";
import * as Highcharts from 'highcharts';
import { Options } from "highcharts";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  donutchart: typeof Highcharts = Highcharts;
  donutchartOptions: Options 
    constructor(dataService: DataService) {
    this.donutchartOptions = {
      chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Solution',
            align: 'center',
            verticalAlign: 'middle',
            y: 90
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: false,
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
      series: [
        {
          type: "pie",
          name: 'Solution',
          innerSize: '50%',
          data: dataService.getData()
        }
      ]
    };
  }
  }

  