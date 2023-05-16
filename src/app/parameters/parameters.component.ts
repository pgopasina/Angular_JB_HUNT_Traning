import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  user!: { id: number, name: string };

  constructor(private activeRouters: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.user = {
      id: this.activeRouters.snapshot.params['id'],
      name: this.activeRouters.snapshot.params['name'],
    }

    this.activeRouters.params.subscribe(data =>{
      this.user.id = data['id'];
      this.user.name = data['name'];
    })

  }

}
