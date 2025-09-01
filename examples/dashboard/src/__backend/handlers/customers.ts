import { pipe } from "@naplaca/react-core";
import { http, HttpResponse } from "msw";
import { z } from "zod";
import database from "../database";
import { createUrl } from "../helpers/create-url";
import { paginate } from "../helpers/pagination";
import { sort } from "../helpers/sort";

export default [
  // GET /customers
  http.get(createUrl("/customers"), ({ request }) => {
    // const url = new URL(request.url);
    // const status = url.searchParams.get("status");

    return HttpResponse.json(
      pipe(
        Array.from(database.customers.values()),
        (customers) =>
          sort(request, customers, [
            { name: "createdAt", type: "date" },
            { name: "name", type: "string" },
          ]),
        (customers) => paginate(request, customers)
      )
    );
  }),

  // GET /customers/metrics
  http.get(createUrl("/customers/metrics"), () => {
    return HttpResponse.json({
      total: database.customers.size,
      pending: 23,
      deleted: 10,
      new: 32,
    });
  }),

  // GET /customers/:customerId
  http.get(createUrl("/customers/:customerId"), ({ params }) => {
    const customerId = z.uuid().parse(params.customerId);
    return HttpResponse.json(database.customers.get(customerId));
  }),
];
