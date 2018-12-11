import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IonicService {
    public API = 'http://localhost:40000/shop';


    constructor(public http: HttpClient) {
        console.log("Welcome to ionic-service");
    }

    findAllUsers(): Observable<any> {
        return this.http.get(this.API + '/res_users');
    }

    findAllProducts(): Observable<any> {
        return this.http.get(this.API + '/product_template');
    }

    findAllCompany(): Observable<any> {
        return this.http.get(this.API + '/res_company');
    }

//     /*get(id : number) {
//       return this.http.get(this.API+'/'+id);
//     }*/

    addUser(newUser: any) {
        console.log("Este es " + JSON.stringify(newUser));
        return this.http.post(this.API + '/res_users/create', newUser);
    }
    
    removeOneUser(idDelete :number){
        let options = {
            headers:{
                'Content-Type': 'appliction/x-www-form-urlencoded'
            }
        };

        return this.http.delete(this.API + '/res_users/delete' + idDelete,options);
    }
 }