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
  idDelete: number;
  // user= {u }
  constructor(public navCtrl: NavController, public ionicService: IonicService, public navParams: NavParams) {

  }

  ionViewDidLoad(){
    console.log("llego al view");
    this.getUsers();
    this.getProducts();
    this.getCompany();
  }

  getUsers(){
    this.ionicService.findAllUsers().subscribe(usersArray =>{
      this.users = usersArray;
    })
  }
  getProducts(){
    this.ionicService. findAllProducts().subscribe(productArray =>{
      this.products = productArray;
    })
  }
  getCompany(){
    this.ionicService. findAllCompany().subscribe(comapnysArray =>{
      this.companys = comapnysArray;
    })
  }
  
  InformationDeleteUser(user:User){
    console.log("llego al infotmation");
     
    this.idDelete= user.id;
      
      this.deleteOne(this.idDelete);
  }

  deleteOne(idDelete){
    console.log("llego al delete");
     this.ionicService.removeOneUser(idDelete).subscribe(() =>{
      console.log("funcionó");
     }, error =>{
      console.log(error);
     })
  }

  

}
class User {
    id: number
}