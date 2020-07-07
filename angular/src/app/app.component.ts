import { Component, HostListener, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, jackInTheBoxAnimation } from 'angular-animations';
import { ISkill } from './models/interfaces';
import { Animations } from './animations';
import AOS from 'aos';

// import { MainComponent } from './views/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    jackInTheBoxAnimation(),
    Animations.stagger3
  ]
})
export class AppComponent implements OnInit {

  // @ViewChild('chatTeaser') chatTeaser: ElementRef;

  // @HostListener('window:scroll')
  // checkScroll() {
  //   const scrollPosition = window.pageYOffset + window.innerHeight;
  //   if (this.chatTeaser && this.chatTeaser.nativeElement.offsetTop >= scrollPosition) {
  //     this.animateAvatars();
  //   }
  // }


  showSkills = false;

  toggle() {
    this.showSkills = !this.showSkills;
  }

  counter = 0;
  @HostListener('window:scroll', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
    // console.log(event);
  }
  resetCounter() {
    this.counter = 0;
  }

  onScrollEvent(event) {
    // console.log(event);
  }

  

  ngOnInit() {
    AOS.init();
    console.log(AOS);
  }

}


