import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {AppConfig} from './app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = environment;
  constructor() {}


  get apiBaseUrl(): string {
    return this.config.api.baseUrl;
  }

  get apiTimeout(): number {
    return this.config.api.timeout;
  }

  get isProduction(): boolean {
    return this.config.production;
  }
}
