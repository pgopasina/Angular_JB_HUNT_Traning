import { Component, OnInit } from '@angular/core';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  value: any = '';

  constructor(private jbHunt: JbhuntserviceService) { }

  ngOnInit(): void {
    // let data = this.value
    // this.jbHunt.inFieldData.next(data);
    this.jbHunt.inFieldData.subscribe((x)=>{
      this.value = x
    })
  }

  sentData(){
    this.jbHunt.inFieldData.next(this.value);
  }
}
