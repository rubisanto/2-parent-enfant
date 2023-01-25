import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get('https://api.unsplash.com/search/photos?page=1&query=car&client_id=vbGqlUQr7dqyiOD5sv-RMfb6VeXzoHV8tar2OXx9Y1c');
  }



}
