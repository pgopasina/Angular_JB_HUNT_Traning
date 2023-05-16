import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { JbhuntserviceService } from 'src/app/jbhuntservice.service';


@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {
  files1!: TreeNode[];
  // selectedFile!: TreeNode[];
  teamManager!: boolean;
  onToggleDynamic!: boolean;
  onToggleStatic = true;
  value1 = true;
  display: boolean = false;
  details: any;
  detailsVisible!:boolean;
  data = [
    {
      "name": "Venkata Ram Prasad Kandregula",
      "CorpName": "vkandregula",
      "designation": "Team Manager",
      "reportTo": "jduvvuri",
      "mobileNumber": 9603132459,
      "phoneNumber": "(243)-233-1814",
      "image": "assets/photos/vkandregula.png",
      "expanded": true,
      "children": [
        {
          "name": "John Vesli Chitri",
          "CorpName": "jchitri",
          "designation": "Team Lead",
          "reportTo": "vkandregula",
          "mobileNumber": 8466874487,
          "phoneNumber": "(248)-232-0350",
          "image": "assets/photos/jchitri.png",
          "expanded": true,
          "children": [
            {
              "name": "Prudhvi Gopasina",
              "CorpName": "pgopasina",
              "designation": "Software Trainee",
              "reportTo": "jchitri",
              "mobileNumber": 9494902594,
              "phoneNumber": "(248)-412-0246",
              "image": "assets/photos/pgopasina.png",
              "expanded": true,
            }
          ]
        }
      ]
    }
  ]


  constructor(private nodeService: JbhuntserviceService) { }

  ngOnInit(): void {
    // this.nodeService.getFiles().then(files => this.files1 = files);
  };

  nodeSelect(event: any) {
    this.onToggleStatic = false
    this.onToggleDynamic = true
    this.details = event.node;
    console.log(event);

  }

  showDialog() {
    this.display = true;
    this.onToggleStatic = true
  }
}




  // hierarchy = [
  //   {
  //     "name": "Venkata Ram Prasad Kandregula",
  //     "CorpName": "vkandregula",
  //     "designation": "Team Manager",
  //     "reportTo": "jduvvuri",
  //     "phoneNumber": 9603132459,
  //     "image": "assets/photos/vkandregula.png"
  //   },
  //   {
  //     "name": "John Vesli Chitri",
  //     "CorpName": "jchitri",
  //     "designation": "Team Lead",
  //     "reportTo": "vkandregula",
  //     "phoneNumber": 8466874487,
  //     "image": "assets/photos/jchitri.png"
  //   },
  //   {
  //     "name": "Prudhvi Gopasina",
  //     "CorpName": "pgopasina",
  //     "designation": "Software Trainee",
  //     "reportTo": "jchitri",
  //     "phoneNumber": 9494902594,
  //     "image": "assets/photos/pgopasina.png"
  //   }
  // ]