import type { PaginationMetadata } from "#/resources/common/schema";
import type { DefaultBodyType, StrictRequest } from "msw";

export function paginate<D, R extends DefaultBodyType>(request: StrictRequest<R>, data: D[]) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  const perPage = Number(url.searchParams.get("perPage") || 25);
  const lastPage = Math.ceil(data.length / perPage) || 1;

  const meta: PaginationMetadata = {
    total: data.length,
    perPage,
    currentPage: page,
    lastPage,
    firstPage: 1,
    firstPageUrl: `${url.origin}${url.pathname}?page=1&perPage=${perPage}`,
    lastPageUrl: `${url.origin}${url.pathname}?page=${lastPage}&perPage=${perPage}`,
    nextPageUrl: `${url.origin}${url.pathname}?page=${Math.min(page + 1, lastPage)}&perPage=${perPage}`,
    previousPageUrl: `${url.origin}${url.pathname}?page=${Math.max(page - 1, 1)}&perPage=${perPage}`,
  };

  return {
    meta,
    data: data.slice((page - 1) * perPage, page * perPage),
  };
}
