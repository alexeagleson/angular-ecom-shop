import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories', fbRef => fbRef.orderByChild('name')).snapshotChanges()
      .pipe(map(dbSnapshotArray => {
        return dbSnapshotArray.map(afAction => {
          const key = afAction.payload.key;
          const data = { key, ...afAction.payload.val() };
          return data;
        })
      }));
  }
}
