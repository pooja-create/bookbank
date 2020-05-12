import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageBooksPageRoutingModule } from './manage-books-routing.module';

import { ManageBooksPage } from './manage-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageBooksPageRoutingModule
  ],
  declarations: [ManageBooksPage]
})
export class ManageBooksPageModule {}
