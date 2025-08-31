import { queryClient } from "#/providers/resources.provider";
import { createCollection } from "@tanstack/db";
import { queryCollectionOptions } from "@tanstack/query-db-collection";
// import { api } from "../api";
import { Customer } from "./schema";

export const customersCollection = createCollection(
  queryCollectionOptions({
    id: "customers",
    queryKey: ["customers"],
    schema: Customer,
    getKey: (customer) => customer.id,
    queryClient,

    queryFn: async () => {
      return Promise.resolve([
        {
          id: "03802742-3a29-447d-9a85-7f02d02e6c6c",
          name: "John Doe",
          email: "john.doe@naplaca.com",
        },
        {
          id: "99dc6518-c245-48f2-bb59-62297f79ee86",
          name: "Calorina Draxler",
          email: "carolina.draxler@naplaca.com",
        },
      ]);
    },

    // onInsert: async ({ transaction }) => {
    //   const customer = transaction.mutations.map((m) => m.modified);
    //   const data = api.customers.getCustomers;
    //   // const data = await api.customers.createCustomer.query();
    //   // Returning nothing or { refetch: true } will trigger a refetch
    //   // Return { refetch: false } to skip automatic refetch
    // },

    // onUpdate: async ({ transaction }) => {
    //   const updates = transaction.mutations.map((m) => ({
    //     id: m.key,
    //     changes: m.changes,
    //   }));
    //   // await api.customers.updateCustomer(updates);
    // },

    // onDelete: async ({ transaction }) => {
    //   const ids = transaction.mutations.map((m) => m.key);
    //   // await api.customers.deleteCustomer(ids);
    // },
  })
);
