import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkComponent],
      imports: [HttpClientTestingModule],
      providers: [JbhuntserviceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sentData method', () => {
    component.sentData();
  });
});
