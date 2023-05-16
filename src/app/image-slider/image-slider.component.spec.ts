import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { JbhuntserviceService } from '../jbhuntservice.service';
import { ImageSliderComponent } from './image-slider.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImageSliderComponent', () => {
  let component: ImageSliderComponent;
  let fixture: ComponentFixture<ImageSliderComponent>;
  let service: JbhuntserviceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSliderComponent],
      providers: [JbhuntserviceService],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(JbhuntserviceService)
    fixture = TestBed.createComponent(ImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should go thourgh services', (inject([JbhuntserviceService], (service: JbhuntserviceService) => {
    spyOn(service, 'getImages');
    expect(service.getImages).toBeTruthy()
  })
  ));
  // it('should create', () => {
  //   spyOn(service, 'getImages'); 
  //   expect(component.image).toBeTruthy
  //   expect(component).toBeTruthy();
  // });
  it('should go thourgh services', (inject([JbhuntserviceService], (service: JbhuntserviceService) => {
    spyOn(service, 'getImages');
    expect(component.image).toBeDefined()
  })
  ));
  // it('Should be async', function (done) {
  //   spyOn(service, 'getImages');
  //   .then(function (images: any) {
  //     expect(images).toBe(true);
  //     done();
  //   });
  // });
});

