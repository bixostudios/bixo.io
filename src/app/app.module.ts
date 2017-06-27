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
import { SectionServicesComponent } from './ui-components/section-services/section-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SectionHeroComponent,
    CallToActionComponent,
    AboutUsComponent,
    SectionServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
