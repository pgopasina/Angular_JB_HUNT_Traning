import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JbhuntserviceService } from '../jbhuntservice.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { DatalistComponent } from './datalist.component';

describe('DatalistComponent', () => {
  let component: DatalistComponent;
  let fixture: ComponentFixture<DatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatalistComponent],
      providers: [JbhuntserviceService],
      imports:[HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
