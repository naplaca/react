export function assert(condition: unknown, messageOrError: string | Error): asserts condition {
  if (!condition) {
    throw typeof messageOrError === "string" ? new Error(messageOrError) : messageOrError;
  }
}
