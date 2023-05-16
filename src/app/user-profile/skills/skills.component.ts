import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  id=''
  childName='Hai Im Child'
  @Input() data:any
  @Output() event = new EventEmitter
  constructor(private jbhunt:JbhuntserviceService) { }

  ngOnInit(): void {
    setInterval(() => {
      let date = new Date()
      this.jbhunt.info1.next(date);
    }, 1000);
    setInterval(() => {
      let date1 = new Date()
      this.jbhunt.info2.next('This is Today date: '+ date1);
    }, 1000);
  }
  onClick(){
this.event.emit(this.childName)
  }
}
