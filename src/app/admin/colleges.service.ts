import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {

  constructor(private db: AngularFireDatabase) { }

create(product) {
    return this.db.list('/collegelist').push(product);
  }
getall() {
    return this.db.list('/collegelist').valueChanges();
    
 } 
}
