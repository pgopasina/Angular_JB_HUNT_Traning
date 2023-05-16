import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  ngOnInit(): void {
  }
//   form: any
//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.form = this.fb.group({
//       Longitude: '',
//       Latitude: ''
//     })
//   }
//   center: google.maps.LatLngLiteral = {
//     lat: 25,
//     lng: 80
// };
//   zoom = 4;
//   markerOptions: google.maps.MarkerOptions = {
//     draggable: true
//   };

//   markerPositions : any= [];

//   getLocation() {
//     this.markerPositions = []
//     this.markerPositions.push({
//       lat:  parseFloat(this.form.controls.Latitude.value),   
//       lng:  parseFloat(this.form.controls.Longitude.value)
//     })
//     console.log(this.markerPositions);
//     //  Latitude: '17.668435',
//     //Longitude : '82.6034867'

//   }
}
