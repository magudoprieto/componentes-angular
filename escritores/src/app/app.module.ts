import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListaescritoresComponent } from './main/listaescritores/listaescritores.component';
import { DetalleescritoresComponent } from './main/listaescritores/detalleescritores/detalleescritores.component';
import { InfoescritorComponent } from './infoescritor/infoescritor.component';
import { LibrosComponent } from './libros/libros.component';
import { NuevoescritorComponent } from './infoescritor/nuevoescritor/nuevoescritor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListaescritoresComponent,
    DetalleescritoresComponent,
    InfoescritorComponent,
    LibrosComponent,
    NuevoescritorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
