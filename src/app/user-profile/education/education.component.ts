import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  switch! : boolean
  parentName = 'Hai Im parent'
  onOdd: boolean = false;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [2, 4, 6, 8, 10]
  value = 10;
  numberColor: boolean = false;
  data = ""
  dateUsingObservable: any;
  dateUsingSubject: any;
  dateUsingBSubject: any;
  childData: any;
  ID: any;

  constructor(private jbhunt: JbhuntserviceService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.jbhunt.info.subscribe((data) => {
        this.dateUsingObservable = data
      })
    }, 1000);

    setInterval(() => {
      this.jbhunt.info1.subscribe((data) => {
        this.dateUsingSubject = data
      })
    }, 1000);

    setInterval(() => {
      this.jbhunt.info2.subscribe((data) => {
        this.dateUsingBSubject = data
      })
    }, 1000);
  }

  getData(event:any){
this.childData = event
  }
  byClick(){
    this.switch = true
  }
}
