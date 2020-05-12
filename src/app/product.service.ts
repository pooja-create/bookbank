import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Productss, Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  bookget: AngularFireObject<Product>;
  constructor(private db: AngularFireDatabase) { }

create(product) {
  return this.db.list('/product').push(product);
}
getall() {
   return this.db.list('/product').snapshotChanges()
   .pipe(
    map(changes =>
        changes.map(c => {
            const data = c.payload.val() as Productss;
            const id = c.payload.key;
            return { id, ...data };
        })
    )
);
}

get(productid: string){
    this.bookget= this.db.object('/product/'+ productid);
    return this.bookget;
}

update(productid,prod){
  this.db.object('/product/'+productid).update(prod);
}

delete(productid){
  this.db.object('/product/'+productid).remove().then(_ => console.log('deleted!'));
}

}
