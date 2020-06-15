import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const localUrl = 'http://api.local/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getContacts() {
    return this.http.get(localUrl +'/contacts1');
  }
  saveContact(contact: Object): Observable<Object> {
    console.log(contact);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'testTokenBhavesh' });
    let options = { headers: headers };
    return this.http.post(localUrl +'/create', contact,options);
  }
}