import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginWithGoogleComponent } from './login-with-google.component';

describe('LoginWithGoogleComponent', () => {
  let component: LoginWithGoogleComponent;
  let fixture: ComponentFixture<LoginWithGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginWithGoogleComponent],
      providers: [FormBuilder],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call loginWithGmail method', () => {
    component.loginWithGmail();
  });
});
