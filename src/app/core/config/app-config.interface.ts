export interface ApiConfig {
  baseUrl: string;
  version?: string;
  timeout: number;
}

export interface AppConfig {
  production: boolean;
  api: ApiConfig;
}
