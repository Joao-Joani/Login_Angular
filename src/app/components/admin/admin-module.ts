import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Routing
import { AdminRoutingModule } from './admin-routing-module';

// Pages
import { Home } from './pages/home/home';


@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
