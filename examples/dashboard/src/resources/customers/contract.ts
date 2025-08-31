import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { PaginatedResponse } from "../common/pagination";
import { CreateCustomerRequest, Customer, UpdateCustomerRequest } from "./schema";

const c = initContract();

export const customersContract = c.router({
  getCustomers: {
    method: "GET",
    path: "/customers",
    responses: {
      200: PaginatedResponse(Customer),
    },
  },

  getCustomer: {
    method: "GET",
    path: "/customers/:customerId",
    pathParams: z.object({ customerId: z.uuid() }),
    responses: {
      200: Customer,
    },
  },

  createCustomer: {
    method: "POST",
    path: "/customers",
    body: CreateCustomerRequest,
    responses: {
      201: Customer,
    },
  },

  updateCustomer: {
    method: "PATCH",
    path: "/customers/:customerId",
    pathParams: z.object({ customerId: z.uuid() }),
    body: UpdateCustomerRequest,
    responses: {
      200: Customer,
    },
  },

  deleteCustomer: {
    method: "DELETE",
    path: "/customers/:customerId",
    pathParams: z.object({ customerId: z.uuid() }),
    responses: {
      204: z.void(),
    },
  },
});
