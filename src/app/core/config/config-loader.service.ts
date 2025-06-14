import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from './app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {
  private configuration!: AppConfig;

  constructor(
    private http: HttpClient
  ) {}

  async loadConfig(): Promise<void> {
    this.configuration = await firstValueFrom(
      this.http.get<AppConfig>('/assets/config.json')
    );
  }

  getConfig(): AppConfig {
    return this.configuration;
  }
}
