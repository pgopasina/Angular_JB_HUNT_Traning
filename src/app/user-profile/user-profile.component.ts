import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Personal',
            icon: 'pi pi-user',
            routerLink: 'personal'
          },
          {
            label: 'Work',
            icon: 'pi pi-briefcase',
            routerLink: 'work'
          },
          {
            label: 'Contact',
            icon: 'pi pi-phone',
            routerLink: 'contact'
          },
          {
            label: 'Education',
            icon: 'pi pi-book',
            routerLink: 'education'
          },
          {
            label: 'Skills',
            icon: 'pi pi-cog',
            routerLink: 'skills'
          },
          {
            label: 'social',
            icon: 'pi pi-globe',
            routerLink: 'social'
          },
        ],
      },
    ];
  }
}

