import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbookPageRoutingModule } from './addbook-routing.module';

import { AddbookPage } from './addbook.page';

import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomFormsModule,
    AddbookPageRoutingModule
  ],
  declarations: [AddbookPage]
})
export class AddbookPageModule {}
