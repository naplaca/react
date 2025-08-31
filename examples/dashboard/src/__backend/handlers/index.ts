import { setupWorker } from "msw/browser";
import customers from "./customers";

export const worker = setupWorker(...customers);
