import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicService } from '../../providers/ionic-service';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  nuevoUser: any = { login: "", password: "" }
  newLogin:String;
  newPassword:string;
  
  constructor(public navCtrl: NavController,  public ionicService: IonicService) {

  }
  
  informationForAddOne() {
    this.nuevoUser = { login: this.newLogin, password: this.newPassword };

    this.addOneUsers(this.nuevoUser);
  }
  addOneUsers(nuevoUser){
    this.ionicService.addUser(nuevoUser).subscribe(() => {
      console.log("funcionó");
    }, error => {
      console.log(error);
    });
  }

  
}
