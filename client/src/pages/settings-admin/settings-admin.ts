import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';

@Component({
  selector: 'page-settings-admin',
  templateUrl: 'settings-admin.html'
})

export class SettingsAdminPage {
  users: Array<any>;
  products: Array<any>;
  companys: Array<any>;
  // user= {u }
  constructor(public navCtrl: NavController, public ionicService: IonicService, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log("llego al view");
    this.getUsers();
    // this.getProducts();
    // this.getCompany();
  }

  getUsers() {
    this.ionicService.findAllUsers().subscribe(usersArray => {
      this.users = usersArray;
    })
  }

  showUsers(){
    for(var i = 0; i < this.users.length; i++){
      console.log(this.users[i].id);
    }
  }

  getProducts() {
    this.ionicService.findAllProducts().subscribe(productArray => {
      this.products = productArray;
    })
  }
  getCompany() {
    this.ionicService.findAllCompany().subscribe(comapnysArray => {
      this.companys = comapnysArray;
    })
  }

  informationDeleteUser(idUser) {
    console.log("llego al infotmation");
    console.log("no llega o qué" + idUser);
    

    this.deleteOne(idUser);
  }

  deleteOne(idDelete) {
    console.log("llego al delete");
    this.ionicService.removeOneUser(idDelete).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log("efrenecito" + error);
    })
  }



}

// class User {
//   id: number
// }