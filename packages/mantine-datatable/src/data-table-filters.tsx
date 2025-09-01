"use client";

import {
  Button,
  CardSection,
  Group,
  Pill,
  Text,
  type CardSectionProps,
  type ComboboxData,
  type ComboboxItem,
  type ComboboxItemGroup,
  type GroupProps,
} from "@mantine/core";
import { assert } from "@naplaca/react-core/utilities/assert";
import { isDefined } from "@naplaca/react-core/utilities/is";
import { PiTrashBold as ClearIcon } from "react-icons/pi";

type BaseFilter = {
  label: string;
  onClear: () => void;
};

type TextFilter = BaseFilter & {
  type: "text";
  value?: string;
};

type MultiSelectFilter = BaseFilter & {
  type: "multi-select";
  value?: string[];
  data: ComboboxData;
};

type SelectFilter = BaseFilter & {
  type: "select";
  value?: string;
  data: ComboboxData;
};

type RadioFilter = BaseFilter & {
  type: "radio";
  value?: string;
  data: ComboboxItem[];
};

export type DataTableFilter = TextFilter | SelectFilter | MultiSelectFilter | RadioFilter;

export interface DataTableFiltersProps extends Omit<GroupProps, "children"> {
  containerProps?: Omit<CardSectionProps, "children">;
  clearLabel?: string;
  filters: Record<string, DataTableFilter>;
  onClear?: () => void;
}

function getValueLabel(filter: DataTableFilter) {
  if (!isDefined(filter.value)) {
    return null;
  }

  if (filter.type === "radio") {
    return filter.data
      .filter((item) => filter.value?.includes(item.value))
      .map((item) => item.label)
      .join(", ");
  }

  if (filter.type === "multi-select" || filter.type === "select") {
    assert(filter.data.length > 0, "MultiSelectFilter data must not be empty");

    const isLabeledData = (data: ComboboxData): data is ComboboxItem[] => {
      return typeof data[0] === "object" && "value" in data[0];
    };

    const isGroupedData = (data: ComboboxData): data is ComboboxItemGroup[] => {
      return typeof data[0] === "object" && "group" in data[0];
    };

    if (isLabeledData(filter.data)) {
      return filter.data
        .filter((item) => filter.value?.includes(item.value))
        .map((item) => item.label)
        .join(", ");
    }

    if (isGroupedData(filter.data)) {
      const selectedItems: string[] = [];

      for (const group of filter.data) {
        if (isLabeledData(group.items)) {
          for (const item of group.items) {
            if (filter.value?.includes(item.value)) {
              selectedItems.push(item.label);
            }
          }
        } else {
          for (const item of group.items) {
            if (filter.value?.includes(item as string)) {
              selectedItems.push(item as string);
            }
          }
        }
      }
      return selectedItems.join(", ");
    }

    return Array.isArray(filter.value) ? filter.value.join(", ") : filter.value;
  }

  return filter.value;
}

export function DataTableFilters({
  filters,
  onClear,
  containerProps,
  clearLabel = "Clear",
  ...props
}: DataTableFiltersProps) {
  const activeFilters = Object.entries(filters).filter(([, filter]) => isDefined(filter.value));

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <CardSection withBorder inheritPadding {...containerProps}>
      <Group {...props}>
        {activeFilters.map(([accessor, filter]) => {
          return (
            <Text key={accessor} fz="sm" c="dimmed">
              {filter.label}:
              <Pill ml="0.25rem" withRemoveButton onRemove={filter.onClear}>
                {getValueLabel(filter)}
              </Pill>
            </Text>
          );
        })}

        {onClear && (
          <Button
            variant="subtle"
            size="compact-xs"
            color="red"
            leftSection={<ClearIcon size="1rem" />}
            onClick={onClear}
          >
            {clearLabel}
          </Button>
        )}
      </Group>
    </CardSection>
  );
}
