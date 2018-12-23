import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListaComponent } from './lista/lista.component';
import { DetallePersonasComponent } from './detalle-personas/detalle-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListaComponent,
    DetallePersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
