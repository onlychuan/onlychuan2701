import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavimpsPage } from './navimps.page';

const routes: Routes = [
  {
    path: '',
    component: NavimpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavimpsPageRoutingModule {}
