import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from '../../core/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient,
              private config: ConfigService) { }

  // Exemple de méthode GET
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  // Exemple de méthode POST
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/endpoint`, data);
  }

  // Exemple de méthode PUT
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/endpoint/${id}`, data);
  }

  // Exemple de méthode DELETE
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/endpoint/${id}`);
  }
}
