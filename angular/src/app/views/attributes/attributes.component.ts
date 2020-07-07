import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  constructor() { }

  attributes = ['Fast', 'Self Learner', 'Security', 'UI/UX'];


  ngOnInit(): void {
  }

}
