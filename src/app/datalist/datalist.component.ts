import { Component, OnInit } from '@angular/core';
import { JbhuntserviceService } from '../jbhuntservice.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  data: any[] = [];
  cols: any[] = [];
  image: any;
  info: any
  constructor(private jbHuntService: JbhuntserviceService) { }

  ngOnInit(): void {
    this.data = this.jbHuntService.passedData;
    // this.image = this.jbHuntService.imgsrc;
    // console.log(this.image);
    this.image = this.jbHuntService.url
    console.log(this.data);
    
    // this.info =this.jbHuntService.
    // this.cols = [
    //   { field: 'roll', header: 'User Roll' },
    //   { field: 'id', header: 'Id' },
    //   { field: 'fName', header: 'First Name' },
    //   { field: 'lName', header: 'Last Name' },
    //   { field: 'mailId', header: 'Mail' },
    //   { field: 'pNumber', header: 'Phone Number' },
    //   { field: 'imgg', header: 'Image' }
    // ];
  }
}
