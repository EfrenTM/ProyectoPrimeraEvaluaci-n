import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsAdminPage } from '../settings-admin/settings-admin';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  //drawNaviganation
  onClikSettings(){
    this.navCtrl.push(SettingsAdminPage);
  }
}
