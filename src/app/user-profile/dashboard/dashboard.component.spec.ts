import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[HttpClientTestingModule],
      providers:[JbhuntserviceService,DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('getdata response', (inject([JbhuntserviceService],
  //   (service: JbhuntserviceService) => {
  //     let getWeatherApiData={
  //       "coord": {
  //           "lon": 83.52607967327259,
  //           "lat": 18.001823735880542
  //       },
  //       "weather": [
  //           {
  //               "id": 804,
  //               "main": "Clouds",
  //               "description": "overcast clouds",
  //               "icon": "https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964"
  //           }
  //       ],
  //       "base": "stations",
  //       "main": {
  //           "temp": 31.03,
  //           "feels_like": 38.03,
  //           "temp_min": 31.03,
  //           "temp_max": 31.03,
  //           "pressure": 1004,
  //           "humidity": 72,
  //           "sea_level": 1004,
  //           "grnd_level": 1001
  //       },
  //       "visibility": 10000,
  //       "wind": {
  //           "speed": 2.61,
  //           "deg": 106,
  //           "gust": 2.29
  //       },
  //       "clouds": {
  //           "all": 85
  //       },
  //       "dt": 1664275926,
  //       "sys": {
  //           "type": 1,
  //           "id": 9255,
  //           "country": "IN",
  //           "sunrise": 1664237729,
  //           "sunset": 1664281111
  //       },
  //       "timezone": 19800,
  //       "id": 1275930,
  //       "name": "Bhīmunipatnam",
  //       "cod": 200
  //     }
  //   spyOn(service, 'getWeatherData').and.returnValue(of(getWeatherApiData))
  //   component.getWeather();
  //   expect(service.getWeatherData).toBeTruthy()
  //   })
  //   ))

    it('should get sunTimings',(inject([JbhuntserviceService],
        (service: JbhuntserviceService) => {
          let data ={
              results: {
                sunrise: '',
                sunset: '',
                solar_noon: '',
                day_length: '',
                civil_twilight_begin: '',
                civil_twilight_end: '',
                nautical_twilight_begin: '',
                nautical_twilight_end: '',
                astronomical_twilight_begin: '',
                astronomical_twilight_end: ''
              },
              status: ''
          }
         
        spyOn(service, 'getSunTimes').and.returnValue(of(data))
        component.getSunRiseSet();
        expect(service.getSunTimes).toBeTruthy()
        })
        ))
});
