import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { HomeBuisnessComponent } from './home-buisness/home-buisness.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { RegisterBuisnessComponent } from './register-buisness/register-buisness.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

const components = [
  LandingComponent,
  LoginComponent,
  RegisterStudentComponent,
  RegisterBuisnessComponent,
  RegisterSuccessComponent,
];

@NgModule({
  declarations: [...components, HomeStudentComponent, HomeBuisnessComponent],
  imports: [CommonModule, ComponentsModule, MaterialModule, FormsModule],
  exports: [...components],
})
export class PagesModule {}
