import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudencrudComponent } from './components/studentcrud/studentcrud.component';
import { HttpClientModule } from '@angular/common/http';
import { ListStudentsComponent } from './components/list-students/list-students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudencrudComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }