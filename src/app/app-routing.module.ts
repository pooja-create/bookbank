import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'activity-detail',
    loadChildren: () => import('./activity-detail/activity-detail.module').then( m => m.ActivityDetailPageModule)
  },
  {
    path: 'login',
    
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'manage-order',
    loadChildren: () => import('./admin/manage-order/manage-order.module').then( m => m.ManageOrderPageModule)
  },
  {
    path: 'manage-books',
    loadChildren: () => import('./admin/manage-books/manage-books.module').then( m => m.ManageBooksPageModule)
  },
  {
    path: 'admin-book',
    loadChildren: () => import('./admin/admin-book/admin-book.module').then( m => m.AdminBookPageModule)
  },
 
  {
    path: 'addbook',
    loadChildren: () => import('./admin/addbook/addbook.module').then( m => m.AddbookPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren: () => import('./admin/addbook/addbook.module').then( m => m.AddbookPageModule)
  },
  {
    path: 'productdisplay',
    loadChildren: () => import('./productdisplay/productdisplay.module').then( m => m.ProductdisplayPageModule)
  },
  {
    path: 'bookdetail/:id',
    loadChildren: () => import('./user/bookdetail/bookdetail.module').then( m => m.BookdetailPageModule)
  },
  {
    path: 'purchaseorder',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user/purchaseorder/purchaseorder.module').then( m => m.PurchaseorderPageModule)
  },
  {
    path: 'addresscart',
    loadChildren: () => import('./user/addresscart/addresscart.module').then( m => m.AddresscartPageModule)
  },
  {
    path: 'addcolleges',
    loadChildren: () => import('./admin/addcolleges/addcolleges.module').then( m => m.AddcollegesPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
