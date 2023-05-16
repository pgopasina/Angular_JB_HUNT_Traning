import { Component, OnInit } from '@angular/core';
import { JbhuntserviceService } from '../jbhuntservice.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  image: any[] = [];

  constructor(private jbHuntService: JbhuntserviceService) { }

  ngOnInit() {
      this.jbHuntService.getImages().then(images =>{ 
          this.image = images
      })    
  }
}
