import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddresscartPage } from './addresscart.page';

const routes: Routes = [
  {
    path: '',
    component: AddresscartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddresscartPageRoutingModule {}
