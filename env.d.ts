export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FOURSQUARE_API_KEY: string;
    }
  }
}