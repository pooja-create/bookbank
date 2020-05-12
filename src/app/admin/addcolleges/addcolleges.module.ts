import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcollegesPageRoutingModule } from './addcolleges-routing.module';

import { AddcollegesPage } from './addcolleges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcollegesPageRoutingModule
  ],
  declarations: [AddcollegesPage]
})
export class AddcollegesPageModule {}
