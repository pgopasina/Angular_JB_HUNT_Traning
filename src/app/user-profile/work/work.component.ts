import { Component, OnInit } from '@angular/core';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  data: any;

  constructor(private jbHunt: JbhuntserviceService) { }

  ngOnInit(): void {
    this.jbHunt.inFieldData.subscribe((x) => {
      this.data = x;
      // let info = this.data
      // this.jbHunt.inFieldData.next(info)
    })
  }
  
sentData(){
  this.jbHunt.inFieldData.next(this.data)
}

}
