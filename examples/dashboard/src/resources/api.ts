import { config } from "#/config";
import { initContract } from "@ts-rest/core";
import { initTsrReactQuery } from "@ts-rest/react-query/v5";
import { customersContract } from "./customers/contract";

const c = initContract();

const contract = c.router(
  {
    customers: customersContract,
  },
  {
    strictStatusCodes: true,
  }
);

export const api = initTsrReactQuery(contract, {
  baseUrl: config.apiUrl,
});
