import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global';

@Injectable()
export class UserService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de angular usuario';
    }

    // saveUsuario(usuario: Usuario): Observable<any>{
    //     let params = JSON.stringify(usuario);
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //     return this._http.post(this.url+'save-usuario', params, {headers: headers});
    // }
    
    // getUsuarios(): Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //     return this._http.get(this.url+'usuarios', {headers: headers});
    // }

    // getUsuario(id): Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
    //     return this._http.get(this.url+'usuario/'+id, {headers: headers});
    // }

    // deleteUsuario(id): Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //     return this._http.delete(this.url+'usuario/'+id, {headers: headers});
    // }

    // updateUsuario(usuario): Observable<any>{
    //     let params = JSON.stringify(usuario);
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //     return this._http.put(this.url+'usuario/'+usuario._id, params, {headers: headers});
    // }
}