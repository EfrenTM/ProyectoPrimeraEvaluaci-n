import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { resolveDefinition } from '@angular/core/src/view/util';

@Injectable()
export class IonicService {
    //serve
    public API = 'http://localhost:40000/shop';
    //sqlite
    // private db: SQLiteObject;

    constructor(public http: HttpClient) {
        // storage: SQLite
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
        return this.http.delete(this.API + '/res_users/delete/' + idDelete);
    }

    removeOneProduct(idDelete :number){
        return this.http.delete(this.API + '/product_template/delete/' + idDelete);
    }

    removeOneCompany(idDelete :number){
        return this.http.delete(this.API + '/res_company/delete/' + idDelete);
    }
    //SQlite
    // CreateImage(ruta: string){
    //     return new Promise((res, req) =>{
    //         let sql =  "INSERT INTO images(ruta) values (?)";
    //         this.db.executeSql(sql, [ruta]).then((data) =>{
    //            resolveDefinition(data);
    //         });
    //     });
    // }
 }