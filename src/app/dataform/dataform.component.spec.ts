import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JbhuntserviceService } from '../jbhuntservice.service';
import { DataformComponent } from './dataform.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { DatalistComponent } from '../datalist/datalist.component';
import {Location} from "@angular/common";
describe('DataformComponent', () => {
  let component: DataformComponent;
  let fixture: ComponentFixture<DataformComponent>;
  let service: JbhuntserviceService;
  let httpMock: HttpClientTestingModule;
  let httpClient: HttpClient
  let router: Router;
  let location: Location;
  const routes: Routes = [
    { path: '', redirectTo: 'dataList', pathMatch: 'full' },
    { path: 'dataList', component: DatalistComponent },
    { path: 'dataForm', component: DataformComponent },

  ]
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [DataformComponent],
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      providers: [FormBuilder,Location, JbhuntserviceService],
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    service = TestBed.inject(JbhuntserviceService);
    httpMock = TestBed.get(HttpClientTestingModule);
    httpClient = TestBed.inject(HttpClient)
    fixture = TestBed.createComponent(DataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onClick method', async(() => {
    let Spying = spyOn(component, 'onClick').and.callThrough();;
    component.onClick("imgg");
    // expect(Spying).toHaveBeenCalled();
    // expect(component.onClick()).toEqual("data")
  }));
it('should call selectFiles method',()=>{
  let Spying = spyOn(component, 'selectFiles').and.callThrough();;
    component.selectFiles("event");
    // expect(component.selectFiles(Event)).toEqual(component.selectFiles(Event))
})
it('should call togStudent method',()=>{
  let Spying = spyOn(component, 'togStudent').and.callThrough();;
    component.togStudent();
})
it('should call togEmploye method',()=>{
  let Spying = spyOn(component, 'togEmploye').and.callThrough();;
    component.togEmploye();
})
  // it('should call radioValueCheck method', () => {
  //   // let Spying = spyOn(component, 'radioValueCheck').and.callThrough();;
  //   component.radioValueCheck('data')
  //   // expect(component.showIdInput).toBe(1)
  // })
  // it('should be false', () => {
  //   component.toggle();
  //   expect(component.showIdInput).toBe(true)
  // })
  // it('should be false', () => {
  //   component.toggle1();
  //   expect(component.showIdInput).toBe(false)
  // })
  // it('navigate to "dataform" takes you to /datalist', fakeAsync(() => {
  //   component.onClick1("data");
  //   router.navigate(['dataList']);
  //   expect(location.path()).toBe('/dataList');
  // }));
});