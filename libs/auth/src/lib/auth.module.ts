import { Route, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
