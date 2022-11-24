import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { UserDirectComponent } from './user-direct/user-direct.component';

import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-page', component: AdminPageComponent},

  { path:'user-direct', component: UserDirectComponent},
  { path: '',redirectTo:'user-direct', pathMatch:'full'},
  {path: 'about-us', component: AboutUsComponent},
  { path: '',redirectTo:'dashboard', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [DashboardComponent, AdminLoginComponent, AdminPageComponent, UserDirectComponent ]
