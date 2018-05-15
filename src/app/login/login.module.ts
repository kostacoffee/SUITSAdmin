import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    NgZorroAntdModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule { }
