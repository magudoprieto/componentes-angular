import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleempledosComponent } from './lista/detalleempledos/detalleempledos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleempledosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
