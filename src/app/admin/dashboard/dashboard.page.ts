import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Productss } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit , OnDestroy {
  products: Productss [] = [];
  filterdProducts: any[];
  subscription: Subscription ;
  constructor(private productService : ProductService,
             ) {
              this.subscription = this.productService.getall()
              .subscribe(products => this.filterdProducts = this.products = products);
   }

   filterx(query: string) { 
       this.filterdProducts = (query) ?
           this.products.filter(p=>p.btitle.toLowerCase().includes(query.toLowerCase())) :
           this.products;

   }
   ngOnDestroy() { 
    this.subscription.unsubscribe();
  }
  
  ngOnInit() {
  }

}
