import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  getAll() {
    return this.db.list('/products').snapshotChanges()
      .pipe(map(dbSnapshotArray => {
        return dbSnapshotArray.map(afAction => {
          const key = afAction.payload.key;
          const data = { key, ...afAction.payload.val() };
          return data;
        })
      }));
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product)
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
