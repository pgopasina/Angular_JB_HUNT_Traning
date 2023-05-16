import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers:[MessageService]
})
export class CrudComponent implements OnInit {
  readOnly: boolean = false
  formCrud: any;
  Data: any = [];
  editById: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCrud = this.fb.group({
      id: ['',[Validators.required,Validators.pattern("[0-9]*")]],
      name: ['',[Validators.required,Validators.pattern("[A-Za-z]*")]],
      dob: ['',Validators.required]
    })
    // if (localStorage.getItem("arrayOfData")) {
    //   this.Data = JSON.parse(localStorage.getItem("arrayOfData") || '')
    // }
  }

  onclick(info: any) {
    this.Data.push(info)
    localStorage.setItem("arrayOfData", JSON.stringify(this.Data));
    this.formCrud.reset();
  }

  delete(rowData: any) {
    let i = -1;
    this.Data.forEach((y: any) => {
      i++;
      if (y.id === rowData.id)
        this.Data.splice(i, 1);
    })

    localStorage.setItem("arrayOfData", JSON.stringify(this.Data))
  }

  onUpdate() {
    this.readOnly = false
    this.Data.forEach((x: any) => {
      if (x.id == this.editById) {
        x.id = this.formCrud.get('id').value
        x.name = this.formCrud.get('name').value;
        x.dob = this.formCrud.get('dob').value
      }

      // onModify(x: any) {
      //   this.readOnly = false;
      //   this.userData.forEach((y: any) => {
      //     if (y.id === this.editById) {
      //       y.id = x.id;
      //       y.name = x.name;
      //       y.dob = x.dob;
      //     }
      //     localStorage.setItem("userData", JSON.stringify(this.userData))
      //   })
      //   this.disableSubmit = true;
      //   this.crud.reset();
      // }

      localStorage.setItem("arrayOfData", JSON.stringify(this.Data))
    });
  }
  Patch(rowData: any) {
    this.readOnly = true;
    // console.log(rowData)
    this.editById = rowData.id
    this.formCrud.patchValue({
      id: rowData.id,
      name: rowData.name,
      dob: rowData.dob,
    })
  }
}

