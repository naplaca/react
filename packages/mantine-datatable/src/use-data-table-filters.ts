import { assert } from "@naplaca/react-core/utilities/assert";
import { isDefined } from "@naplaca/react-core/utilities/is";
import { useCallback, useMemo, useReducer } from "react";
import { type DataTableFilter } from "./data-table-filters";

type Action =
  | { type: "INIT"; accessor: string; filter: DataTableFilter }
  | { type: "CLEAR_ALL" }
  | { type: "CLEAR_ONE"; accessor: string }
  | { type: "UPDATE"; accessor: string; value?: DataTableFilter["value"] };

function filtersReducer(state: Record<string, DataTableFilter>, action: Action): Record<string, DataTableFilter> {
  switch (action.type) {
    case "INIT":
      return state[action.accessor] ? state : { ...state, [action.accessor]: action.filter };

    case "CLEAR_ALL":
      return Object.fromEntries(Object.entries(state).map(([key, filter]) => [key, { ...filter, value: undefined }]));

    case "CLEAR_ONE": {
      const filter = state[action.accessor];
      assert(filter, `Filter with accessor "${action.accessor}" does not exist`);
      return {
        ...state,
        [action.accessor]: { ...filter, value: undefined },
      };
    }

    case "UPDATE": {
      const filter = state[action.accessor];
      assert(filter, `Filter with accessor "${action.accessor}" does not exist`);
      return isDefined(action.value)
        ? { ...state, [action.accessor]: { ...filter, value: action.value as any } }
        : filtersReducer(state, { type: "CLEAR_ONE", accessor: action.accessor });
    }

    default:
      return state;
  }
}

function defaultToQuery(filters: Record<string, DataTableFilter>) {
  return Object.entries(filters)
    .filter(([, filter]) => Boolean(filter.value))
    .reduce<Record<`filter[${string}]`, string>>((acc, [accessor, filter]) => {
      assert(filter.value, "Filtering didn't work");

      if (filter.type === "multi-select") {
        acc[`filter[${accessor}]`] = filter.value.join(",");
      } else {
        acc[`filter[${accessor}]`] = filter.value;
      }

      return acc;
    }, {});
}

interface UseDataTableFiltersArgs<Q> {
  toQuery?: (filters: Record<string, DataTableFilter>) => Q;
}

export function useDataTableFilters<Q = Record<`filter[${string}]`, string>>(args?: UseDataTableFiltersArgs<Q>) {
  const [filters, dispatch] = useReducer(filtersReducer, {});

  const initFilter = useCallback((accessor: string, filter: DataTableFilter) => {
    dispatch({ type: "INIT", accessor, filter });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: "CLEAR_ALL" });
  }, []);

  const clear = useCallback((accessor: string) => {
    dispatch({ type: "CLEAR_ONE", accessor });
  }, []);

  const onChange = useCallback((accessor: string, value?: DataTableFilter["value"]) => {
    dispatch({ type: "UPDATE", accessor, value });
  }, []);

  const isFiltering = useCallback((accessor: string) => Boolean(filters[accessor]?.value), [filters]);

  const query = useMemo(() => (args?.toQuery ?? defaultToQuery)(filters), [args?.toQuery, filters]);

  return {
    filters,
    initFilter,
    clearAll,
    clear,
    onChange,
    isFiltering,
    query,
  };
}

export type UseDataTableFilters = ReturnType<typeof useDataTableFilters>;
