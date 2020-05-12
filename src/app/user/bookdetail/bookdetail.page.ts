import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Productss } from 'src/app/models';
import { ShoppingcartService } from 'src/app/shoppingcart.service';
import { shoppingcartnumber } from 'src/model/shoppingcartnumber';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.page.html',
  styleUrls: ['./bookdetail.page.scss'],
})
export class BookdetailPage implements OnInit, OnDestroy {
  allquantity;
  bookdetail: Productss;
  id;
  cart: any;
  card$: Observable<shoppingcartnumber>;
  subscription: Subscription;
  a: number;
  quantity: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private shoppingCart: ShoppingcartService,
              
      ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.get(this.id).valueChanges()
      .subscribe(bookdetail =>  this.bookdetail = bookdetail);
      }

async ngOnInit()
  {
  this.subscription= (await this.shoppingCart.getCartEach())
    .subscribe(cart=>{this.cart = cart; });

  this.card$ = await this.shoppingCart.getCart();
 } 
ngOnDestroy(){
      this.subscription.unsubscribe();
  }
addtocart(){
  this.shoppingCart.addtoCart(this.bookdetail,this.id);
}

getquantity(){
  if(!this.cart){
    return 0;
  }
  let item = this.cart.items[this.id];
  console.log(item);
  return item ? item.quantity : 0 ;
}

removequantity(){
  this.shoppingCart.removefromCart(this.bookdetail,this.id);
}
addquantity(){
  this.shoppingCart.addtoCart(this.bookdetail,this.id);
}
}