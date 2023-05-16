import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UrlValidationComponent } from './url-validation.component';

describe('UrlValidationComponent', () => {
  let component: UrlValidationComponent;
  let fixture: ComponentFixture<UrlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrlValidationComponent],
      providers: [FormBuilder],
      imports: [HttpClientModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UrlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method', async(() => {
    let Spying = spyOn(component, 'onSearch').and.callThrough();;
    component.onSearch("data")
    expect(Spying).toHaveBeenCalled();
    expect(component.input).toEqual("data")
  }));
});
