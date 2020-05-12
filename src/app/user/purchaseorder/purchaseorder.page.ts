import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from 'src/app/shoppingcart.service';
import { shoppingcartnumber } from 'src/model/shoppingcartnumber';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.page.html',
  styleUrls: ['./purchaseorder.page.scss'],
})
export class PurchaseorderPage implements OnInit {
  cart$: Observable<shoppingcartnumber>;
  constructor(private shoppingCart: ShoppingcartService) { }

  async ngOnInit() {
        this.cart$ =await this.shoppingCart.getCart();
  }
 
}
