import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({

  selector: 'page-create-products',
  templateUrl: 'create-products.html',
})
export class CreateProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUsersPage');
  }
  
  // informationForAddOne() {
  //   this.nuevoUser = { login: this.newLogin, password: this.newPassword };

  //   this.addOneUsers(this.nuevoUser);
  // }
  // addOneUsers(nuevoUser){
  //   this.ionicService.addUser(nuevoUser).subscribe(() => {
  //     console.log("funcionó");
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
