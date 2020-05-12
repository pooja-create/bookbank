import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdisplayPage } from './productdisplay.page';

const routes: Routes = [
  {
    path: '',
    component: ProductdisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdisplayPageRoutingModule {}
