import { Component, ViewEncapsulation } from '@angular/core';
import { ChartService } from '../shared/chart.service';

let type = 'Female';
const valuesChart = {
  chart: {
    caption: "Values",
    subCaption:`Gender: ${type}`,
    aligncaptionwithcanvas: "0",
    theme: "fusion",
    bgColor: "#66000000",
    yAxisPosition: "top",
    showValues: "1",
    placeValuesInside:"1",
    palettecolors:"#ffffff",
    divLineDashed:"1",
    divLineDashLen:"5",
    divLineDashGap:"6",
    plotSpacePercent:'40'
  },
  data: [
    {
      displayValue: "Humility",
      value: "0"
    },
    {
      displayValue: "Nature",
      value: "0"
    },
    {
      displayValue: "Concern",
      value: "0"
    },
    {
      displayValue: "Tolerance",
      value: "0"
    },
    {
      displayValue: "Caring",
      value: "0"
    },
    {
      displayValue: "Dependability",
      value: "0"
    },
    {
      displayValue: "Thought",
      value: "0"
    },
    {
      displayValue: "Action",
      value: "0"
    },
    {
      displayValue: "Simulation",
      value: "0"
    },
    {
      displayValue: "Hedonism",
      value: "0"
    },
    {
      displayValue: "Achievement",
      value: "0"
    },
    {
      displayValue: "Dominance",
      value: "0"
    },
    {
      displayValue: "Resources",
      value: "0"
    },
    {
      displayValue: "Face",
      value: "0"
    },
    {
      displayValue: "Personal",
      value: "0"
    },
    {
      displayValue: "Societal",
      value: "0"
    },
    {
      displayValue: "Tradition",
      value: "0"
    },
    {
      displayValue: "Rules",
      value: "0"
    },
    {
      displayValue: "Interpersonal",
      value: "0"
    }
  ]
};

const highOrderValuesChart = {
  "chart": {
      caption: "High Order Values",
      subCaption:`Gender: ${type}`,
      aligncaptionwithcanvas: "0",
      divLineDashed:"1",
      divLineDashLen:"5",
      divLineDashGap:"6",
      theme: "fusion",
      bgColor: "#66000000",
      yAxisPosition: "top",
      yAxisMaxValue: "5",
      showValues: "1",
      placeValuesInside:"1",
      palettecolors:"#ffffff"
  },
  "data": [
      {
          "displayValue": "Self Transcendence",
          "value": "0"
      },
      {
          "displayValue": "Openness to Change",
          "value": "0"
      },
      {
          "displayValue": "Self Enhancement",
          "value": "0"
      },
      {
          "displayValue": "Conservation",
          "value": "0"
      }
  ]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  valuesChartWidth: string = "400";
  valuesChartHeight: string = "565";
  valuesChartType: string = "bar2d";
  valuesChartDataFormat: string = "json";
  valuesChartDataSource: {} = valuesChart;

  highOrderChartWidth: string = "450";
  highOrderChartHeight: string = "565";
  highOrderChartType: string = "bar2d";
  highOrderChartDataFormat: string = "json";
  highOrderChartDataSource: {} = highOrderValuesChart;
  
  constructor(private chartService :ChartService){}

  fetchData(type: string) {
      this.chartService.getChartDetails(type).subscribe((response: any) => {
        valuesChart.data = response.values;
        valuesChart.chart.subCaption = `Gender: ${this.toUpperCase(type)}`;
        highOrderValuesChart.data = response.highOrderValues;
        highOrderValuesChart.chart.subCaption = `Gender: ${this.toUpperCase(type)}`;
      });
      
  }

  toUpperCase(value: string){
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1);
  }
    
}
