import {
  APP_INITIALIZER,
  ApplicationConfig, importProvidersFrom,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {ConfigLoaderService} from './core/config/config-loader.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function initializeApp(configLoader: ConfigLoaderService) {
  return () => configLoader.loadConfig().catch(err => {
    console.error('Erreur lors de l\'initialisation:', err);
    return Promise.resolve(true); // Pour éviter le blocage infini
  });
}

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    ConfigLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigLoaderService],
      multi: true
    },
    provideRouter(routes),
    provideClientHydration(),
    provideZonelessChangeDetection(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};


