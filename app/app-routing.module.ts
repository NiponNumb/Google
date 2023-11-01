import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PishingDetailComponent } from 'src/crud/Pishing-detail.component';
import { PishingComponent } from 'src/crud/Pishing.component';
const routes: Routes = [
{path: 'Pishing', component:PishingComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }