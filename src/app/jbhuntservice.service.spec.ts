import { inject, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { JbhuntserviceService } from './jbhuntservice.service';

describe('JbhuntserviceService', () => {
  let service: JbhuntserviceService;
  let testMockDate: Date;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[JbhuntserviceService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(JbhuntserviceService);
    
  });

  it('should be created', () => {
    expect(service).toBeDefined;
  });

  it('should getWeatherData api', () => {
    service.getWeatherData()
    expect(service.getWeatherData()).toBeTruthy()
  });
  
  it('should selectImgFile api', () => {
    service.getSunTimes()
    expect(service.getSunTimes()).toBeTruthy()
  });

  it('should passData method', () => {
    service.passData('')
    // expect(service.getSunTimes()).toBeTruthy()
  });

  it('should getProductsSmall method', () => {
    service.getProductsSmall()
    // expect(service.getSunTimes()).toBeTruthy()
  });

  it('should getImages method', () => {
    service.getImages()
    // expect(service.getSunTimes()).toBeTruthy()
  });

//   it('check date', inject([service],
//     (service: JbhuntserviceService) => {
//       const dateString = service.info;
//       expect(dateString).toBe('2019-09-15T00:00:00Z');
//     }
//  ));

  it('should getSunTimes method', () => {
    service.selectImgFile('event')
    // expect(service.getSunTimes()).toBeTruthy()
  });

});
