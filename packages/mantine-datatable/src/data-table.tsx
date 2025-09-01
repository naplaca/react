"use client";

import { CardSection } from "@mantine/core";
import { CardTitle } from "@naplaca/mantine-components/components/card-title";
import {
  DataTable as MantineDataTable,
  type DataTableColumn,
  type DataTableProps as MantineDataTableProps,
} from "mantine-datatable";
import { type ReactNode } from "react";
import { DataTableContainer } from "./data-table-container";
import { DataTableFilters, type DataTableFiltersProps } from "./data-table-filters";
import { DataTableMultiSelectFilter } from "./data-table-multi-select-filter";
import { DataTableRadioFilter } from "./data-table-radio-filter";
import { DataTableSelectFilter } from "./data-table-select-filter";
import { DataTableTabs, type DataTableTabsProps } from "./data-table-tabs";
import { DataTableTextInputFilter } from "./data-table-text-input-filter";

export interface DataTableProps<T = Record<string, unknown>>
  extends Pick<
    MantineDataTableProps<T>,
    | "page"
    | "records"
    | "fetching"
    | "onPageChange"
    | "recordsPerPage"
    | "totalRecords"
    | "onRecordsPerPageChange"
    | "recordsPerPageOptions"
    | "sortStatus"
    | "onSortStatusChange"
    | "recordsPerPageLabel"
    | "noRecordsText"
    | "paginationText"
  > {
  title: string;
  description?: string;
  actions?: ReactNode;
  // tabs
  tabs?: DataTableTabsProps["tabs"];
  onTabChange?: DataTableTabsProps["onChange"];
  defaultTab?: DataTableTabsProps["defaultTab"];
  // filters
  filters?: DataTableFiltersProps["filters"];
  onClearFilters?: DataTableFiltersProps["onClear"];
  // data
  columns: DataTableColumn<T>[];
}

export function DataTable<T = Record<string, unknown>>({
  title,
  description,
  actions,
  tabs,
  onTabChange,
  defaultTab,
  filters,
  onClearFilters,
  ...DataTable
}: DataTableProps<T>) {
  return (
    <DataTableContainer h="100%">
      <CardTitle title={title} description={description} actions={actions} mb={tabs ? "0" : "sm"} />
      {tabs && <DataTableTabs tabs={tabs} onChange={onTabChange} defaultTab={defaultTab} />}
      {filters && <DataTableFilters onClear={onClearFilters} filters={filters} />}

      <CardSection h="100%">
        <MantineDataTable
          h="100%"
          paginationText={DataTable.paginationText!}
          noRecordsText={DataTable.noRecordsText!}
          recordsPerPageLabel={DataTable.recordsPerPageLabel!}
          withTableBorder={false}
          page={DataTable.page!}
          records={DataTable.records!}
          fetching={DataTable.fetching!}
          onPageChange={DataTable.onPageChange!}
          recordsPerPage={DataTable.recordsPerPage!}
          totalRecords={DataTable.totalRecords!}
          onRecordsPerPageChange={DataTable.onRecordsPerPageChange!}
          recordsPerPageOptions={DataTable.recordsPerPageOptions!}
          sortStatus={DataTable.sortStatus!}
          onSortStatusChange={DataTable.onSortStatusChange!}
          columns={DataTable.columns!}
        />
      </CardSection>
    </DataTableContainer>
  );
}

DataTable.TextInputFilter = DataTableTextInputFilter;
DataTable.MultiSelectFilter = DataTableMultiSelectFilter;
DataTable.RadioFilter = DataTableRadioFilter;
DataTable.SelectFilter = DataTableSelectFilter;
