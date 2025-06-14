import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {ConfigLoaderService} from './core/config/config-loader.service';
import {environment} from '../environments/environment';

export function initializeApp(configLoader: ConfigLoaderService) {
  return () => configLoader.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideZonelessChangeDetection(),
    ConfigLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigLoaderService],
      multi: true
    }
  ]
};


