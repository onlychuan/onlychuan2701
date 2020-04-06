import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavimpsPageRoutingModule } from './navimps-routing.module';

import { NavimpsPage } from './navimps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavimpsPageRoutingModule
  ],
  declarations: [NavimpsPage]
})
export class NavimpsPageModule {}
