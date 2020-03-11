import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASEURL = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }


  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  get(link: string) {
    return this.http.get(`${BASEURL}` + link, { headers: this.getHeaders() }).toPromise();
  }

  post(link: string, body: any): Observable<any> {
    return this.http.post(`${BASEURL}` + link, body, { headers: this.getHeaders() });
  }
}
