import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

import { PersonalComponent } from './personal.component';

describe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;
  let service: JbhuntserviceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, JbhuntserviceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel', () => {
    component.onCancel()
  });

  it('should save', () => {
    // let firstName = {
    //   firstName: ''
    // }
    component.onSave('firstName')
    // service.staticData.firstName = firstName.firstName
  });

  it('should profileEdit', () => {
    component.profileEdit()
  });

});
