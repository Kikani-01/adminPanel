import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import {  UsersComponent } from './users/users.component';


import {  SettingsComponent } from './settings/settings.component';
import { ResetpasswordComponent } from 'src/app/settings/resetpassword/resetpassword.component';
import { ResetusernameComponent} from '../../src/app/settings/resetusername/resetusername.component';
const routes: Routes = [
  {path : '', component : LoginComponent},
  { path:'login' , component: LoginComponent },
  { path:'dashboard' , component: DashboardComponent },
  { path:'users', component: UsersComponent },
 
  { path:'settings', component:SettingsComponent },
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'resetusername',component:ResetusernameComponent},
  { path:'pages', component:SettingsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
