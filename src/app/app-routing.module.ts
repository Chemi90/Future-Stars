import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { RegisterBuisnessComponent } from './pages/register-buisness/register-buisness.component';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component';
import { HomeBuisnessComponent } from './pages/home-buisness/home-buisness.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register-student',
    component: RegisterStudentComponent,
  },
  {
    path: 'register-buisness',
    component: RegisterBuisnessComponent,
  },
  {
    path: 'register-success',
    component: RegisterSuccessComponent,
  },
  {
    path: 'home-student',
    component: HomeStudentComponent,
  },
  {
    path: 'home-buisness',
    component: HomeBuisnessComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
