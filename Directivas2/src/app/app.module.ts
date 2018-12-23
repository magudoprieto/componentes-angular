import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwicthComponent } from './swicth/swicth.component';
import { NegritaDirective } from './negrita.directive';

@NgModule({
  declarations: [
    AppComponent,
    CondicionalesComponent,
    BuclesComponent,
    SwicthComponent,
    NegritaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
