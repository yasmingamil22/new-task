import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/user-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) { }


  contactUs(userData:UserData):Observable<any>{
  return this._HttpClient.post('http://upskilling-egypt.com:3001/contact',userData)
  }}
