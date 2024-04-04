import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneNumberDirective } from './phone-number.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaskDirective } from './mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberDirective,
  

    MaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
