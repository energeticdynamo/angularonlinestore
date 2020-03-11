import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db:AngularFireDatabase) { }

  saveUser(user:firebase.User)
  {
    this.db.object('/users/'+user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
}
