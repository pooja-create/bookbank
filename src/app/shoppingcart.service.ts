import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Productss } from './models';
import 'rxjs/add/operator/take';
import { take, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { map } from 'rxjs/operators';
import { shoppingcartnumber } from 'src/model/shoppingcartnumber';




@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  quantity:0;
  constructor(private db: AngularFireDatabase) {}

private create(){
  return this.db.list('/shopping-cart').push({datecreated: new Date().getTime()});
}

async getCart(): Promise<Observable<shoppingcartnumber>> {
  const cartid = await this.getorcreatecartid();
  return this.db.object('/shopping-cart/' + cartid).valueChanges().
  pipe(map(x => new shoppingcartnumber(x)));
  
}
async getCartEach() {
  const cartid = await this.getorcreatecartid();
  return this.db.object('/shopping-cart/' + cartid).valueChanges();
 
  
}
private getItem({ cartid, productid }: { cartid: string; productid: string; }) { 
  return this.db.object('/shopping-cart/' + cartid + '/items/' + productid).valueChanges();
}
private async getorcreatecartid(): Promise<string>
{  
  let cartid = localStorage.getItem('cartid');
  if(cartid) { return cartid; }
  else { 
  const result = await this.create();
  localStorage.setItem('cartid', result.key);
  return result.key;
  }
}
async addtoCart(product,id) {
  let cartid = await this.getorcreatecartid();
  let item$: Observable<any> = this.getItem({ cartid, productid: id });
  let item$$ = this.db.object('/shopping-cart/' + cartid + '/items/' + id);
  item$.take(1).subscribe( item => {
     if( item === null ) {
        item$$.set({product : product, quantity: 1});
        console.log('adding new product to cart');
    }else{
        item$$.update({quantity: item.quantity + 1});
        console.log('updating exisiting product');
   }
});
}
async removefromCart(product,id) {
    let cartid = await this.getorcreatecartid();
    let item$: Observable<any> = this.getItem({ cartid, productid: id });
    let item$$ = this.db.object('/shopping-cart/' + cartid + '/items/' + id);
    item$.take(1).subscribe( item => {
       if( item === null ) {
          item$$.set({product : product, quantity: 1});
          console.log('adding new product to cart');
      }else{
          item$$.update({quantity: item.quantity - 1});
          console.log('updating exisiting product');
     }
  });
 }
 


}
