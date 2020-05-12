import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.page.html',
  styleUrls: ['./productdisplay.page.scss'],
})
export class ProductdisplayPage implements OnInit {
  product$;
  constructor(private productService: ProductService) 
  {
     this.product$=this.productService.getall();
  }

  ngOnInit() {
  }


}
