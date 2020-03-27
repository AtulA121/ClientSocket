import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _http : HttpClient) { }

  getData(url){
    return this._http.post(url,{userId : "a121"});
  }

}
