import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AlertifyService } from './_services/alertify.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      FooterComponent,
      ContactUsComponent,
   ],
   imports: [
      BrowserModule,
      NgxPageScrollModule,
      ReactiveFormsModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
