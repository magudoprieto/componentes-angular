import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InfoescritorComponent } from './infoescritor/infoescritor.component';
import { NuevoescritorComponent } from './infoescritor/nuevoescritor/nuevoescritor.component';

const routes: Routes = [
  {path: 'list',component:MainComponent},
  {path: 'escritor/:idEscritor', component: InfoescritorComponent, children:[
    {path: 'libros', component: NuevoescritorComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
