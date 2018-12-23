import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaempleadosComponent } from './listaempleados/listaempleados.component';
import { DetalleempleadosComponent } from './listaempleados/detalleempleados/detalleempleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaempleadosComponent,
    DetalleempleadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
