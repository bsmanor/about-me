import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/models/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills: ISkill[] = [
    {
      name: 'Node.js',
      years: 1,
      level: 50
    },
    {
      name: 'JavaScript',
      years: 4,
      level: 80
    },
    {
      name: 'HTML5',
      years: 4,
      level: 90
    },
    {
      name: 'CSS3',
      years: 4,
      level: 60
    },
    {
      name: 'Angular',
      years: 3,
      level: 90
    },
    {
      name: 'Python',
      years: 1,
      level: 40
    }
  ];
  
  ngOnInit(): void {
  }

}
