import dotenv from 'dotenv';

export enum Environments {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export class EnvironmentConfig {
  private dotenvConfigOptions: dotenv.DotenvConfigOptions;

  constructor() {
    this.dotenvConfigOptions = {}; // Add any specific options you need for dotenv config
    this.configureEnvironment();
  }

  private configureEnvironment(): void {
    dotenv.config(this.dotenvConfigOptions);
  }
}
