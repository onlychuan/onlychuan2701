import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentdetilPage } from './studentdetil.page';

const routes: Routes = [
  {
    path: '',
    component: StudentdetilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentdetilPageRoutingModule {}
