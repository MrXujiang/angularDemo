import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { NewMapComponent } from './newMap';
// 路由不能以‘/’开始
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newMap', component: NewMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
