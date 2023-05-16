import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
  });
  let localData: any;

  beforeEach(() => {
    localData = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localData ? localData[key] : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localData[key] = value)
    );
    spyOn(window.localStorage, 'clear').and.callFake(() => (localData = {}));
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store data', async () => {
    expect(component).toBeTruthy();
    window.localStorage.setItem("name", "Prudhvi")
    console.log("local store", window.localStorage.getItem("name"));

  });
  // Expected $.length = 0 to equal 1.
  // Expected $[0] = undefined to equal Object({ id: '1', name: 'Prudhvi', dob: '23/06/1999' }).

  it('should get data from localstoage when init,if there is data', async () => {
    let sampleData = [{ "id": "1", "name": "Prudhvi", "dob": "23/06/1999" }]
    window.localStorage.setItem("arrayOfData", JSON.stringify(sampleData))
    expect(window.localStorage.getItem("arrayOfData")).toEqual(JSON.stringify(sampleData))
    component.ngOnInit()
    expect(component.Data).toEqual(sampleData)
  })

  it('should set data in localstoage when submit ', () => {
    let sampleData0 = { "id": "1", "name": "Prudhvi", "dob": "23/06/1999" }
    component.onclick(sampleData0)
    expect(window.localStorage.getItem("arrayOfData")).toEqual(JSON.stringify([sampleData0]))
  })

  it('should delete data in localstoage when delete ', async () => {
    let sampleData1 = { "id": "1", "name": "Prudhvi", "dob": "23/06/1999" }
    //window.localStorage.setItem("arrayOfData", JSON.stringify(sampleData1))
    //console.log("local data",localData);
    component.Data=[sampleData1]
    component.delete(sampleData1)
    expect(window.localStorage.getItem("arrayOfData")).toEqual(JSON.stringify([]));
  })

  it('should patch data in localstoage when Patch ', async () => {
    let sampleData2 = { "id": "1", "name": "Prudhvi", "dob": "23/06/1999" }
    component.Patch(sampleData2)
    expect(component.editById).toEqual(sampleData2.id)
    expect(component.formCrud.value).toEqual(
      {
        id: sampleData2.id,
        name: sampleData2.name,
        dob: sampleData2.dob
      })
  })

  it('should update the data', async () => {
    let sampleData3 = { "id": "1", "name": "Prudhvi", "dob": "23/06/1999" }
    window.localStorage.setItem("arrayOfData", JSON.stringify(sampleData3))
    component.Data = [sampleData3]
    component.formCrud.patchValue(
      {
        id: sampleData3.id,
        name: sampleData3.name,
        dob: sampleData3.dob
    })
    component.editById = "1"
    component.onUpdate()
    expect(window.localStorage.getItem("arrayOfData")).toEqual(JSON.stringify([{ "id": "1", "name": "Prudhvi", "dob": "23/06/1999" }]))
  })
});


