import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PishingDetailComponent } from 'src/crud/Pishing-detail.component';
import { PishingComponent } from 'src/crud/Pishing.component';
import { GoogleComponent } from './google/google.component';
import { GooglepasswordComponent } from './googlepassword/googlepassword.component';
const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'sign-in'  },
  {path: 'sign-in-password', component:GooglepasswordComponent},
  {path: 'sign-in', component:GoogleComponent},
  {path: 'Pishing', component:PishingComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }