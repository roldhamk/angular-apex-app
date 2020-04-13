import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getWeapons() {
    return this.http.get(
      'http://apex-legends-api.herokuapp.com/api/v1/weapons'
    );
  }

  getLegends() {
    return this.http.get(
      'https://apex-legends-api.herokuapp.com/api/v1/legends'
    );
  }
}
