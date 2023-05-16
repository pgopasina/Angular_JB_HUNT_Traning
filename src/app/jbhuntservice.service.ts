import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Image } from './image';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TreeNode } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class JbhuntserviceService {
  authState: any;
  passedData: any[] = [];
  imgsrc: any;
  url: any = '';
  dataShared: any;
  constructor(private http: HttpClient) { }

  todayDate = new Observable((data) => {
    let date = new Date();
    data.next(date);
  });

  inFieldData = new Subject()

  info = new Observable((data) => {
    let date = new Date();
    data.next(date);
  });

  info1 = new Subject();

  info2 = new BehaviorSubject('');
  // signIn(PROVIDER_ID: any) {
  //   throw new Error('Method not implemented.');
  // }

  // signOut() {
  //   throw new Error('Method not implemented.');
  // }

  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getImages() {
    return this.http.get<any>('assets/images.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
  }
  passData(list: any) {
    this.passedData.push(list)
  }
  // upLoadImg(x:any){
  // this.imgsrc?.push(x)
  // }

  selectImgFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target?.result;
        console.log(this.url);
      }
    }
  }

  staticData = {
    firstName: 'Prudhvi',
    lastName: 'Gopasina',
    aliasName: 'N/A',
    gender: 'Male',
    maritalStatus: 'Unmaried',
    employeeID: '5267',
    physicallyChallenged: 'NO',
    bloodGroup: 'O+',
  }

//   dataSharing(x:any){
// this.dataShared = x;
//   }

getWeatherData(){
return this.http.get('https://fcc-weather-api.glitch.me/api/current?lat=18.001823735880542&lon=83.52607967327259');
}
getSunTimes(){
  return this.http.get('http://api.sunrise-sunset.org/json');
  }

  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}
