import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from '../../config/config.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.api.baseUrl + '/user';

  constructor(private http: HttpClient,
              private config: ConfigService) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/endpoint`, data);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/endpoint/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/endpoint/${id}`);
  }

  testApi(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }

}
