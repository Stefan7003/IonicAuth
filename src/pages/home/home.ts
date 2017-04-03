import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Authentication } from '../../providers/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private auth: Authentication) {
    
  }

  doLogout(){
    this.auth.doLogout();
  }

}
