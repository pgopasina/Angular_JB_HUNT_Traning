import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  disableMenu: boolean = true
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [      
      {
        label:'--------- Profile ---------',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: 'userProfile/dashboard'
          },
          {
            label: 'hierarchy',
            icon: 'pi pi-sitemap',
            routerLink: 'userProfile/hierarchy'
          },
          {
            label: 'Personal',
            icon: 'pi pi-user',
            routerLink: 'userProfile/personal'
          },
          {
            label: 'Contact',
            icon: 'pi pi-phone',
            routerLink: 'userProfile/contact'
          },
          {
            label: 'Education',
            icon: 'pi pi-book',
            routerLink: 'userProfile/education'
          },
          {
            label: 'Work',
            icon: 'pi pi-briefcase',
            routerLink: 'userProfile/work'
          },
          {
            label: 'Skills',
            icon: 'pi pi-cog',
            routerLink: 'userProfile/skills'
          },
        ]
      },
      {label:'---------- Tasks ----------',
      items: [
        {
          label: 'Image Slider',
          icon: 'pi pi-images',
          routerLink: 'image'
        },
        {
          label: 'Google Maps',
          icon: 'pi pi-map',
          routerLink: 'gmaps'
        },
        {
          label: 'Registeration Form',
          icon: 'pi pi-users',
          routerLink: 'dataForm'
        },
        {
          label: 'CRUD Operation',
          icon: 'pi pi-cog',
          routerLink: 'crud'
        },
        {
          label: 'Files Up/Download',
          icon: 'pi pi-file',
          routerLink: 'file'
        },

        {
          label: 'Url Validation',
          icon: 'pi pi-globe',
          routerLink: 'url'
        },
        {
          label: 'Login With Google',
          icon: 'pi pi-google',
          routerLink: 'login2google'
        },
        {
          label: 'parameters',
          icon: 'pi pi-cog',
          routerLink: 'parameters'
        },
      ],
    },
    ];
  }
  onDisableMenu() {
    this.disableMenu = false
  }
  onVisableMenu() {
    this.disableMenu = true
  }


}