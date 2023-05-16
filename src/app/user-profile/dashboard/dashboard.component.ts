import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loader:boolean = true;
  day: any
  weatherData: any;
  weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  date: any;
  format: string = "medium";
  icon: any
  sunSet: any;
  sunRise: any;
  sunrise: any;
  sunset: any;
  sunTimings: any;
  today: any;
  tomorrow: any;
  dayAfterTomorrow: any;
  day1: any;
  day2: any;
  constructor(private jbhunt: JbhuntserviceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1500);
    this.getWeather();
    this.getSunRiseSet();
  }
  getWeather() {
    this.jbhunt.getWeatherData().subscribe(data => {
      this.weatherData = data
      console.log(this.weatherData);
      setInterval(() => {
        this.jbhunt.todayDate.subscribe((date: any) => {
          this.date = date;
        })
      }, 1000);
    let today = new Date()
      this.day = this.weekDay[today.getDay()]

      this.day1 = this.weekDay[today.getDay() + 1]
      this.tomorrow = new Date(today)
      this.tomorrow.setDate(this.tomorrow.getDate() + 1)

      this.day2 = this.weekDay[today.getDay() + 2]
      this.dayAfterTomorrow = new Date(today)
      this.dayAfterTomorrow.setDate(this.dayAfterTomorrow.getDate() + 2)
      // console.log(this.day);
      this.icon = this.weatherData.weather[0]?.icon;
      // console.log('icon:', this.icon);
      // this.sunRise = new Date(this.weatherData.sys.sunrise);
      // // this.sunrise = this.sunRise.getTime()
      // console.log('sunRise ', this.sunRise);

      // this.sunSet = new Date(this.weatherData.sys.sunset);
      // // this.sunset = this.sunSet.getTime()
      // console.log('sunSet', this.sunSet);
    });
  }
  // get dateInCST(){
  //   return this.datePipe.transform(this.date, this.format, "CST");
  // }

  getSunRiseSet() {
    this.jbhunt.getSunTimes().subscribe((data) => {
      this.sunTimings = data;
      this.sunRise = this.sunTimings.results.sunrise;
      this.sunSet = this.sunTimings.results.sunset;
    })
    // this.sunRise = this.sunTimings.;


  }
}
