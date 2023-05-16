import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      imports: [HttpClientTestingModule],
      providers: [JbhuntserviceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getData method', () => {
    component.getData('')
  });

  it('should call byClick method', () => {
    component.byClick()
  });
});
