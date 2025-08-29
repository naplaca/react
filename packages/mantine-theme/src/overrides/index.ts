"use client";

import type { MantineThemeComponent } from "@mantine/core";
import anchor from "./anchor";
import badge from "./badge";
import breadcrumbs from "./breadcrumbs";
import buttons from "./buttons";
import card from "./card";
import charts from "./charts";
import container from "./container";
import drawer from "./drawer";
import dropzone from "./dropzone";
import inputs from "./inputs";
import loadingOverlay from "./loading-overlay";
import menu from "./menu";
import notification from "./notification";
import ringProgress from "./ring-progress";
import table from "./table";
import tooltip from "./tooltip";

export default {
  ...anchor,
  ...card,
  ...badge,
  ...breadcrumbs,
  ...buttons,
  ...charts,
  ...drawer,
  ...inputs,
  ...loadingOverlay,
  ...menu,
  ...notification,
  ...ringProgress,
  ...table,
  ...tooltip,
  ...container,
  ...dropzone,
} as Record<string, MantineThemeComponent>;
