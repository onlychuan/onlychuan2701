import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataileditPage } from './datailedit.page';

const routes: Routes = [
  {
    path: '',
    component: DataileditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataileditPageRoutingModule {}
