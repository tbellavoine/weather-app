import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss']
})
export class WeatherChartComponent implements OnInit {

  @Input('hours') hours: any;
  type="LineChart";
  datas = [];
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true,
    axisX:{  
      //Try Changing to MMMM
      valueFormatString: "MMMM"
    },
    data:this.datas
  };
  

  constructor() { }

  ngOnInit(): void {
    this.getChartDatas();
  }

  getChartDatas(){
    console.log('hours',this.hours)
    this.hours.forEach(hour => {
      console.log('hour',hour)
      
      const convert = this.convertTime(hour.dt);
      const temp = [convert.getHours(),convert.getDay(),hour.temp];
      console.log('temp',temp)
      // temp.push(this.convertTime(hour.dt),hour.temp);
      this.datas.push(temp);
      
    })
    console.log('this.datas',this.datas);
  }

  convertTime(time:any){
    // const date = new Date(time * 1000);
    // return date.getHours();
    return new Date(time * 1000);
    
  }

}
