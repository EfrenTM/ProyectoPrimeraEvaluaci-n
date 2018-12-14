import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';
import { CreateProductPage } from '../../pages/create-products/create-products';
@Component({
  selector: 'page-settings-admin',
  templateUrl: 'settings-admin.html'
})

export class SettingsAdminPage {
  users: Array<any>;
  products: Array<any>;
  companys: Array<any>;
  constructor(public navCtrl: NavController, public ionicService: IonicService, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log("llego al view de settings");
    this.getUsers();
    this.getProducts();
    this.getCompany();
  }
  //users
  //Get
  getUsers() {
    this.ionicService.findAllUsers().subscribe(usersArray => {
      this.users = usersArray;
    })
  }
  //Delete
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
  //Create
  showUsers() {
    for (var i = 0; i < this.users.length; i++) {
      console.log(this.users[i].id);
    }
  }
  
  //product
  //Get
  getProducts() {
    this.ionicService.findAllProducts().subscribe(productArray => {
      this.products = productArray;
    })
  }
  //Delete
  informationDeleteProduct(idProduct) {
    console.log("llego al boton ")
    this.deleteOneProduct(idProduct);
  }

  deleteOneProduct(idDelete) {
    console.log("llego al delete");
    this.ionicService.removeOneProduct(idDelete).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log("efrenecito" + error);
    })
  }
  //Create Settings
  CreateProduct(){
    console.log("llego al botton de los cojones"); 
    this.navCtrl.push(CreateProductPage);
  }
  //Company
  //GET
  getCompany() {
    this.ionicService.findAllCompany().subscribe(comapnysArray => {
      this.companys = comapnysArray;
    })
  }

  //Delete
  informationDeleteCompany(idCampny) {
    console.log("llego al boton de company")
    this.deleteOnePCompany(idCampny);
  }

  deleteOnePCompany(idDelete) {
    console.log("llego al delete");
    this.ionicService.removeOneCompany(idDelete).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log("efrenecito" + error);
    })
  }

}

