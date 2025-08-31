import { config } from "#/config";

export async function enableFakeBackend() {
  if (!config.enableFakeBackend) {
    return;
  }

  const { worker } = await import("./handlers");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  await worker.start({ onUnhandledRequest: "bypass" });
}
