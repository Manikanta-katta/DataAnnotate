import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdduserComponent } from './shared/adduser/adduser.component';
import { CrowdComponent } from './shared/crowd/crowd.component';

import { CustomLoginComponent } from './shared/custom-login/custom-login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { LoginComponent } from './shared/login/login.component';
import { CountComponent } from './shared/manager/count/count.component';
import { ManagerComponent } from './shared/manager/manager.component';
import { topNavComponent } from "./shared/top-nav/top-nav.component";
import { UserComponent } from './shared/user/user.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'crowd',
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent ,
  },
  {
    path:'landing-page',component:LandingPageComponent
  },

  {
    path:'dashboard',component:DashboardComponent
  },

  {
    path:'footer',component:FooterComponent
  },

  {
    path:'custom-login', component:CustomLoginComponent
  },
  {
    path:'top-nav', component: topNavComponent
  },
  {
    path:'user', component: UserComponent
  },
  {
    path:'adduser', component: AdduserComponent
  },
  {
    path:'manager', component: ManagerComponent
  },
  {
    path:'count', component: CountComponent
  },
  {
    path:'crowd', component: CrowdComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
