import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicFormSimpleExampleComponent } from './dynamic-form-simple-example/dynamic-form-simple-example.component';
import { FormGroupAsControlComponent } from './form-group-as-control/form-group-as-control.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DynamicFormSimpleExampleComponent, FormGroupAsControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
