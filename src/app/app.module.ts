import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AgePipe } from './age.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    FormComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
