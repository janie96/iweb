import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WorkshopComponent} from './workshop/workshop.component';
import {RegisterComponent} from './register/register.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {SupportComponent} from './support/support.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'support', component: SupportComponent },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
