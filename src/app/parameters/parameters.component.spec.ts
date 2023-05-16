import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ParametersComponent } from './parameters.component';

describe('ParametersComponent', () => {
  let component: ParametersComponent;
  let fixture: ComponentFixture<ParametersComponent>;
  // class MockRouter {
  //   navigate = jasmine.createSpy('navigate');
  // }

  // const fakeActivatedRoute = {snapshot: { data: { ... } } } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParametersComponent],
      imports: [RouterTestingModule],
      // providers: [{ provide: ActivatedRoute,useClass: MockRouter}],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
