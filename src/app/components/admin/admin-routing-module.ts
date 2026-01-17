import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Components
import { Home } from './pages/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dashboard',
    component: Home,
  },
  {
    path: 'account',
    component: Home,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
