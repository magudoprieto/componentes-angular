import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CronoComponent } from './crono/crono.component';
import { SumarComponent } from './sumar/sumar.component';


@NgModule({
  declarations: [
    AppComponent,
    CronoComponent,
    SumarComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
