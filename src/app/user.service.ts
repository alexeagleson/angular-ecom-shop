import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFireDatabase) {}

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }

  save(user: firebase.User) {
    this.db.object('users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    })
  }
}
