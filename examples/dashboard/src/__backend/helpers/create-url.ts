import { config } from "#/config";

export function createUrl(endpoint: string) {
  return new URL(endpoint, config.apiUrl).toString();
}
