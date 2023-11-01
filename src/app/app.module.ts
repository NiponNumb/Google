import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PishingComponent } from 'src/crud/Pishing.component';
import { PishingDetailComponent } from 'src/crud/Pishing-detail.component';
import { GoogleComponent } from './google/google.component';
import { GooglepasswordComponent } from './googlepassword/googlepassword.component';
 @NgModule({
  declarations: [
    AppComponent,
PishingComponent,
PishingDetailComponent,
GoogleComponent,
GooglepasswordComponent,
 ],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }