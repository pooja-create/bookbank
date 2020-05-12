import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Categorys } from './models';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

getCategories()
{
 return this.db.list('/category', ref => ref.orderByChild('name')).snapshotChanges()
 .pipe(
  map(changes =>
      changes.map(c => {
          const data = c.payload.val() as Categorys;
          const id = c.payload.key;
          return { id, ...data };
      })
  )
);
}

}
