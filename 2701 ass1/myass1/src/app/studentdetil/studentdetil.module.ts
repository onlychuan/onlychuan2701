import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentdetilPageRoutingModule } from './studentdetil-routing.module';

import { StudentdetilPage } from './studentdetil.page';
import { DataileditPage } from '../datailedit/datailedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentdetilPageRoutingModule
  ],
  declarations: [StudentdetilPage,DataileditPage],
  entryComponents: [DataileditPage]
})
export class StudentdetilPageModule {}
