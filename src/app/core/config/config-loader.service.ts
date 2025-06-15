import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { AppConfig } from './app-config.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {
  private configuration: AppConfig = environment; // Initialisation avec l'environment par défaut

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<boolean> {
    try {
      this.configuration = await firstValueFrom(
        this.http.get<AppConfig>('/assets/config.json').pipe(
          timeout(5000) // Timeout de 5 secondes
        )
      );
      return true;
    } catch (error) {
      console.warn('Utilisation de la configuration par défaut:', error);
      // On garde la configuration de l'environment
      return true;
    }
  }

  getConfig(): AppConfig {
    return this.configuration;
  }
}
