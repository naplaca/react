"use client";

import { useState } from "react";

export type PaginationParams = {
  page?: number;
  perPage?: number;
};

export function useDatatablePagination(params?: PaginationParams) {
  const [page, setPage] = useState(params?.page ?? 1);
  const [perPage, setPerPage] = useState(params?.perPage ?? 15);

  const onChangePerPage = (value: number) => {
    setPerPage(value);
    setPage(1);
  };

  return { page, perPage, setPage, setPerPage: onChangePerPage };
}
