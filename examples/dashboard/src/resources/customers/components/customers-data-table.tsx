import { api } from "#/resources/api";
import { DataTable, useDataTableFilters, useDatatablePagination, useDataTableSort, useDataTableTabs, type DataTableColumn } from "@naplaca/mantine-datatable";
import { useMemo } from "react";
import type { Customer } from "../schema";

export function CustomersDataTable() {
  const pagination = useDatatablePagination({ page: 1, perPage: 10 })
  const filters = useDataTableFilters()
  const sort = useDataTableSort<Customer>({ column: "name", direction: "asc" })

  const metrics = api.customers.getCustomersMetrics.useSuspenseQuery({
    queryKey: ["customers", "metrics"],
  }).data.body

  const tabs = useDataTableTabs({
    defaultTab: "all",
    tabs: [
      {
        value: "all",
        label: "Customers",
        color: "primary",
        badge: metrics.total
      }
    ]
  })

  const query = {
    ...pagination,
    ...sort.query,
    ...tabs.query,
    ...filters.query
  }

  const { data, isLoading } = api.customers.getCustomers.useQuery({
    queryKey: ["customers", query],
    queryData: { query }
  })

  const columns: DataTableColumn<Customer>[] = useMemo(() => [], [filters])

  return (
    <DataTable
      title="Conta bancárias"
      description="Lista de todas contas bancárias no sistema."
      // noRecordsText={DataTable.helpers.noRecordsText("conta bancária", "f")}
      // recordsPerPageLabel={DataTable.helpers.recordsPerPageLabel("contas bancárias")}
      // paginationText={DataTable.helpers.paginationText("contas bancárias")}
      // actions={<CreateBankAccountButton variant="default" size="xs" />}
      // tabs
      defaultTab={tabs.defaultTab}
      onTabChange={tabs.onChange}
      tabs={tabs.tabs}
      // filters
      filters={filters.filters}
      onClearFilters={filters.clearAll}
      // pagination
      page={pagination.page}
      onPageChange={pagination.setPage}
      recordsPerPage={pagination.perPage}
      onRecordsPerPageChange={pagination.setPerPage}
      totalRecords={data?.body.meta.total ?? 0}
      // sort
      sortStatus={sort.status}
      onSortStatusChange={sort.change}
      // data
      fetching={isLoading}
      columns={columns}
      records={data?.body.data ?? []}
      recordsPerPageOptions={[5, 10, 30]}
    />
  );
}