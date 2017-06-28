import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './ui-components/navigation/navigation.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { SectionHeroComponent } from './ui-components/section-hero/section-hero.component';
import { CallToActionComponent } from './ui-components/call-to-action/call-to-action.component';
import { AboutUsComponent } from './ui-components/about-us/about-us.component';
import { SectionWeAreAwesomeComponent } from './ui-components/section-we-are-awesome/section-we-are-awesome.component';
import { SectionWhatWeDoComponent } from './ui-components/section-what-we-do/section-what-we-do.component';
import { CallToActionHireComponent } from './ui-components/call-to-action-hire/call-to-action-hire.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SectionHeroComponent,
    CallToActionComponent,
    AboutUsComponent,
    SectionWeAreAwesomeComponent,
    SectionWhatWeDoComponent,
    CallToActionHireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
