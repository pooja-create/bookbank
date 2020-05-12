import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseorderPageRoutingModule } from './purchaseorder-routing.module';

import { PurchaseorderPage } from './purchaseorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseorderPageRoutingModule
  ],
  declarations: [PurchaseorderPage]
})
export class PurchaseorderPageModule {}
