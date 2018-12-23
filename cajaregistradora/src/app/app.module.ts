import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ComidaComponent } from './main/comida/comida.component';
import { BebidaComponent } from './main/bebida/bebida.component';
import { ListaComponent } from './main/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComidaComponent,
    BebidaComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
