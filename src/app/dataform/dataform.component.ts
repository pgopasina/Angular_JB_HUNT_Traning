import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JbhuntserviceService } from '../jbhuntservice.service';
@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
  dataForm: any;
  showStar: boolean = false;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileData: any
  name: any;
  base64: string = "Base64...";
  previews: string[] = [];
  imageInfos?: Observable<any>;
  fileSelected?: Blob;
  imageUrl?: string;
  url = '';
  constructor(private sant: DomSanitizer, private router: Router, private fb: FormBuilder, private jbHuntService: JbhuntserviceService) { }
  // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
  ngOnInit(): void {
    this.dataForm = this.fb.group({
      roll: ['', Validators.required],
      id: '',
      fName: ['', [Validators.required, Validators.pattern("[A-Za-z]*"), Validators.minLength(3)]],
      lName: ['', [Validators.required, Validators.pattern("[A-Za-z]*"), Validators.minLength(3)]],
      mailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      pNumber: ['', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]],
      chooseImg:  ''
    })
    this.dataForm.controls.id.reset();
    this.dataForm.controls.pNumber.reset();
  }
  onClick(info: any) {
    // this.jbHuntService.upLoadImg(info)
    // <img [src]="image" height="200">
    info.imgg=`<img [src]=${this.jbHuntService.url}>`
    // console.log(info.imgg);
    this.jbHuntService.passData(info)
    // console.log(info);
    this.router.navigateByUrl("dataList")
    this.dataForm.reset();
  }
  // radioValueCheck(x: any) {
  //   this.showIdInput = (x === 1);
  // }
  togStudent() {
    this.dataForm.controls.id.setValidators([Validators.required, Validators.pattern("[0-9]*")]);
    this.showStar = true
    this.dataForm.controls.id.reset();
    this.dataForm.controls.fName.reset();
    this.dataForm.controls.lName.reset();
    this.dataForm.controls.mailId.reset();
    this.dataForm.controls.pNumber.reset();
    this.dataForm.controls.imgg.reset();
  }
  togEmploye() {
    this.dataForm.controls.id.setValidators(null);
    this.showStar = false
    this.dataForm.controls.id.reset();
    this.dataForm.controls.fName.reset();
    this.dataForm.controls.lName.reset();
    this.dataForm.controls.mailId.reset();
    this.dataForm.controls.pNumber.reset();
    // this.jbHuntService.url.reset();
  }
  // onSelectNewFile(files: FileList): void {
  //   console.log(files);
  //   this.fileSelected = files[0];
  //   this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string
  //   this.base64 = "Base64...";
  // }

  // convertFileToBase64(): void {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(this.fileSelected as Blob);
  //   reader.onloadend = () => {
  //     this.base64 = reader.result as string;
  //   }
  // }
  selectFiles(event:any) {
    this.jbHuntService.selectImgFile(event)
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload = (event) => {
    //     this.url =event.target?.result;
    //     console.log(this.url);
    //   }
    // }
  }
}