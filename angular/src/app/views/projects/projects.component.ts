import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectsImages: Array<object> = [{
    image: '../../../assets/images/cookbook.png',
    thumbImage: '../../../assets/images/cookbook.png',
    alt: 'alt of image',
    title: 'Cookbook'
}, {
    image: '../../../assets/images/dashboard.png', // Support base64 image
    thumbImage: '../../../assets/images/dashboard.png', // Support base64 image
    title: 'Team Dashboard', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
];

  ngOnInit(): void {
  }

}
