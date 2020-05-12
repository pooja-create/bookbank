import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageBooksPage } from './manage-books.page';

const routes: Routes = [
  {
    path: '',
    component: ManageBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageBooksPageRoutingModule {}
