// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { AboutComponent } from './views/about/about.component';
import { SkillsComponent } from './views/skills/skills.component';
import { DescriptionComponent } from './views/description/description.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';

// 3rd party
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AttributesComponent } from './views/attributes/attributes.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    SkillsComponent,
    DescriptionComponent,
    ProjectsComponent,
    ContactComponent,
    AttributesComponent,
    NavBarComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AnimateOnScrollModule.forRoot(),
    ScrollToModule.forRoot(),
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
