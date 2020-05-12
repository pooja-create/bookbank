import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddresscartPageRoutingModule } from './addresscart-routing.module';

import { AddresscartPage } from './addresscart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddresscartPageRoutingModule
  ],
  declarations: [AddresscartPage]
})
export class AddresscartPageModule {}
