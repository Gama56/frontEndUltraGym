import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
    public url: string;

    constructor( 
        protected _http: HttpClient,
    ){
        this.url = 'https://backend-ultragym.azurewebsites.net/api/User';
    }
  getUsers(users, password) {
    return this._http.get('https://backend-ultragym.azurewebsites.net/api/Users/UserLogin?Email=' + users
    + '&Password=' + password, { responseType: 'json' });
  }
}
