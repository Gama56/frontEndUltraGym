import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root' 
})

export class GymService {
    public url: string 

    constructor( 
        public _http: HttpClient,
        
    ){
        this.url = 'https://backend-ultragym.azurewebsites.net/api/Gym/';
    }

    httpOptions = { 
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    getGyms(){
        return this._http.get(this.url + 'ReadAllGym/').pipe(
           tap(console.log));
    }

    getOneGym(Id) {
        return this._http.get(this.url + 'ReadOneGym?IdGym=' + Id);
    }


    errorHandl(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent){
            console.error('An error ocurred', error.error.message);
        }else{
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; try again later'
            );
    }

}