import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdisplayPageRoutingModule } from './productdisplay-routing.module';

import { ProductdisplayPage } from './productdisplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdisplayPageRoutingModule
  ],
  declarations: [ProductdisplayPage]
})
export class ProductdisplayPageModule {}
