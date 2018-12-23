import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { FormmodelComponent } from './formmodel/formmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormtemplateComponent,
    FormmodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
