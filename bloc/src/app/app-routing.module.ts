import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../app/blog/blog.component';
import { NewComponent } from '../app/new/new.component';

const routes: Routes = [
  {path:'blog', component: BlogComponent},
  {path:'new', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
