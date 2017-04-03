import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';



/*
  Generated class for the Authentication provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authentication {

  constructor(private auth: Auth, private ionicUser: User) {
  }

  activeUser = new BehaviorSubject(null);

  doLogin(_userName, _password){
    if(_userName){
      this.auth.login('basic', {
        'email': _userName,
        'password': _password
      }).then(() => {
        this.activeUser.next(this.ionicUser);
      }, (_error) => {
        alert(JSON.stringify(_error));
      });
    }
  }

  doCreateUser(_userName, _password){
    this.auth.signup({
      'email': _userName, 
      'password': _password
    }).then(() => {
      return this.doLogin(_userName, _password);
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else if (e === 'required_email') {
          alert('Missing email field.');
        } else if (e === 'required_password') {
          alert('Missing password field');
        } else if (e === 'invalid_email') {
          alert('The email did not pass validation.');
        }
      }
    });
  }

  doLogout(){
    this.auth.logout();
    this.activeUser.next(null);
  }
}
