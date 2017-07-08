import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SvgBixolabComponent } from './components/home/svg-bixolab/svg-bixolab.component';
import { SvgBixolaunchComponent } from './components/home/svg-bixolaunch/svg-bixolaunch.component';
import { SvgBixodesignComponent } from './components/home/svg-bixodesign/svg-bixodesign.component';
import { SvgBixobrandingComponent } from './components/home/svg-bixobranding/svg-bixobranding.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component:  ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SvgBixolabComponent,
    SvgBixolaunchComponent,
    SvgBixodesignComponent,
    SvgBixobrandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
