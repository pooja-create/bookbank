import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivityDetailPage } from '../activity-detail/activity-detail.page';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { CategoryService } from '../category.service';

import { Productss, Categorys } from '../models';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingcartService } from '../shoppingcart.service';
import {  Subscription } from 'rxjs';
import { shoppingcartnumber } from 'src/model/shoppingcartnumber';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


 
export class Tab1Page implements OnInit {
  @ViewChild(IonSlides, {static: false}) slider: IonSlides;
  segment = 0;
  cat: Categorys[] = [];
  category: string;
  products: Productss[] = [];
  filteredProduct: Productss[] = [];
  filteredcat : Categorys[] = []; 
  subscription: Subscription;
  card$: Observable<shoppingcartnumber>;
 

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private shoppingCart: ShoppingcartService,
              public afAuth: AngularFireAuth
      ) {

     this.categoryService.getCategories().subscribe(cat=>
                                                    this.cat =this.filteredcat= cat);
      
     this.productService.getall().switchMap(products=> {
                                            this.products= this.filteredProduct = products;
                                            return route.queryParamMap;})

                                            .subscribe(params=>{
                                  this.category=params.get('category');
                                  this.filteredProduct=(this.category)? 
                                  this.products.filter(p=>p.category===this.category):
                                  this.products;})
      }
 
  slideOpt = {

  loop: true,
  autoplay: true,
  slidesPerView: 3
    
   };
async ngOnInit() {
   
    this.card$ = await this.shoppingCart.getCart();
  }

async segmentChanged() {
    await this.slider.slideTo(this.segment);
}

async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
    this.slider.update();
}


}
