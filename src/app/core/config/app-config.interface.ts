export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export interface AppConfig {
  production: boolean;
  api: ApiConfig;
}
