import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Components
import { Sign } from './pages/sign/sign';

const routes: Routes = [
  {
    path: '',
    component: Sign,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
