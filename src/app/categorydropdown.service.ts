import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategorydropdownService {

  constructor(private db: AngularFireDatabase) { }


getCategories()
{
 return this.db.list('/category', ref => ref.orderByChild('name')).snapshotChanges()
}
}
