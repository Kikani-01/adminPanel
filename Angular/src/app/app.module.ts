import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './shared/user.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ResetpasswordComponent } from './settings/resetpassword/resetpassword.component';
import { ResetusernameComponent } from './settings/resetusername/resetusername.component';




const appRoutes:Routes = [
  {path :"login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent},
  { path:'users', component: UsersComponent },
  { path:'settings', component:SettingsComponent },
  { path:'pages', component:PagesComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    PagesComponent,
    SettingsComponent,
    HeaderComponent,
  
    SidenavComponent,
    LayoutComponent,
    ResetpasswordComponent,
    ResetusernameComponent,
   

  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
