import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBookPageRoutingModule } from './admin-book-routing.module';

import { AdminBookPage } from './admin-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBookPageRoutingModule
  ],
  declarations: [AdminBookPage]
})
export class AdminBookPageModule {}
