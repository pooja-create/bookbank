import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { CategorydropdownService } from 'src/app/categorydropdown.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.page.html',
  styleUrls: ['./addbook.page.scss'],
})
export class AddbookPage implements OnInit {
  category$;
  product={};
  id;
  constructor(private categorydService: CategorydropdownService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute
    ) {
     this.category$= categorydService.getCategories();
     this.id = this.route.snapshot.paramMap.get('id');

     if(this.id){
        this.productService.get(this.id).valueChanges().subscribe(p=>this.product =p);
       
      }
    }

  ngOnInit() {
  }

onsubmit(product){
  if(this.id){
    this.productService.update(this.id,product);
  }
  else{
    this.productService.create(product);
  }
  this.router.navigate(['dashboard']);
}

deletebook(){
  if(confirm('Are you sure you want to delete this product')){
    this.productService.delete(this.id);
    console.log(this.id)
  } else{
    return;
  }
  this.router.navigate(['dashboard']);
}

}