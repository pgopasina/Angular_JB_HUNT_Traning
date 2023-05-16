import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-url-validation',
  templateUrl: './url-validation.component.html',
  styleUrls: ['./url-validation.component.css']
})
export class UrlValidationComponent implements OnInit {
  myForm: any;
  input: any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      url:['',[Validators.required,Validators.pattern("((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)")]]
    })
  }
  onSearch(data:any){
    // console.log(data);
    this.input=data;
    }
}
