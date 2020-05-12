import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcollegesPage } from './addcolleges.page';

const routes: Routes = [
  {
    path: '',
    component: AddcollegesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcollegesPageRoutingModule {}
