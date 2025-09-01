import { PaginatedRequest, PaginatedResponse } from "@naplaca/react-core/api";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { CreateCustomerRequest, Customer, CustomersMetrics, UpdateCustomerRequest } from "./schema";

const c = initContract();

export const customersContract = c.router({
  getCustomers: {
    method: "GET",
    path: "/customers",
    query: PaginatedRequest(),
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

  getCustomersMetrics: {
    method: "GET",
    path: "/customers/metrics",
    responses: {
      200: CustomersMetrics,
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
