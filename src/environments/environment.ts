import {AppConfig} from '../app/core/config/app-config.interface';

export const environment: AppConfig  = {
  production: false,
  api: {
    baseUrl: 'http://localhost:8080/api',
    timeout: 30000,
  }
};
