import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  Gender: any
  form: any;
  staticData: any
  toggle: boolean = true
  Status: any;
  genderValue: any;
  mariedValue: any
  physicalValue: any;
  bloodGroup: any;
  constructor(private jbhunt: JbhuntserviceService, private fb: FormBuilder) {
    this.Gender = [
      { name: 'Female', code: 'f' },
      { name: "Others", code: 'o' },
      { name: 'Male', code: 'm' },
    ];
    this.bloodGroup = [
      { name: 'O+', code: 'O+' },
      { name: "O-", code: 'o-' },
      { name: 'AB-', code: 'AB-' },
      { name: 'AB+', code: 'AB+' },
      { name: "A-", code: 'A-' },
      { name: 'B-', code: 'B-' },
      { name: "A+", code: 'A+' },
      { name: 'B+', code: 'B+' },
    ];
    this.Status = [
      { name: 'Unmaried', code: 'un' },
      { name: 'Maried', code: 'm' },
    ];
    this.physicalValue = [
      { name: 'NO', code: 'N' },
      { name: 'YES', code: 'Y' },
    ]
  }

  ngOnInit(): void {
    this.staticData = this.jbhunt.staticData
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern("[A-Za-z]*"), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern("[A-Za-z]*"), Validators.minLength(3)]],
      aliasName: '',
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      employeeID: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      physicallyChallenged: ['', Validators.required],
      bloodGroup: '',
    });
  }


  profileEdit() {
    // console.log(this.jbhunt.staticData.gender);
    this.toggle = false;
    this.form.patchValue({
      firstName: this.jbhunt.staticData.firstName,
      lastName: this.jbhunt.staticData.lastName,
      aliasName: this.jbhunt.staticData.gender,
      gender: this.jbhunt.staticData.gender,
      maritalStatus: this.jbhunt.staticData.maritalStatus,
      employeeID: this.jbhunt.staticData.employeeID,
      physicallyChallenged: this.jbhunt.staticData.physicallyChallenged,
      bloodGroup: this.jbhunt.staticData.bloodGroup
    })
  }

  onSave(x: any) {
    console.log(x);
  
    //   if (this.addarchivepurgeForm.invalid) {
    //     Object.keys(this.addarchivepurgeForm.controls).forEach(formControlName => {
    //       this.addarchivepurgeForm.get(formControlName).markAsTouched();
    //     });
    //   }
    //   else{
    //     // console.log(this.sfgPartnersForm);
    //   }
  
    if (this.form.invalid) {
      this.form.get('aliasName').markAsTouched();
      this.form.get('bloodGroup').markAsTouched();
      this.form.get('physicallyChallenged').markAsTouched();
      return;
    }
    this.jbhunt.staticData.firstName = x.firstName,
      this.jbhunt.staticData.lastName = x.lastName,
      this.jbhunt.staticData.aliasName = x.aliasName,
      this.jbhunt.staticData.gender = x.gender,
      this.jbhunt.staticData.maritalStatus = x.maritalStatus,
      this.jbhunt.staticData.employeeID = x.employeeID,
      this.jbhunt.staticData.physicallyChallenged = x.physicallyChallenged,
      this.jbhunt.staticData.bloodGroup = x.bloodGroup,
      this.toggle = true;
  }
  onCancel() {
    this.toggle = true;
  }


}
