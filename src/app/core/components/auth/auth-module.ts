import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Sign } from './pages/sign/sign';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Sign
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
