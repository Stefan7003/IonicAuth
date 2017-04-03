import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Authentication } from '../../providers/authentication';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: Authentication) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(_email, _password) {
    this.auth.doLogin(_email.value, _password.value);
  }

  doCreateAccount(_email, _password){
    this.auth.doCreateUser(_email.value, _password.value);
  }

}
