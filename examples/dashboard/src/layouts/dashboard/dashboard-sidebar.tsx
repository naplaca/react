import { t } from "@lingui/core/macro";
import { Sidebar, type SidebarSectionProps } from "@naplaca/mantine-components/components/sidebar";
import {
  PiBankDuotone,
  PiBookOpenTextDuotone,
  PiBuildingsDuotone,
  PiCashRegisterDuotone,
  PiGearSixDuotone,
  PiSquaresFourDuotone,
  PiUsersDuotone,
} from "react-icons/pi";

const sections: SidebarSectionProps[] = [
  {
    header: "Geral",
    items: [
      {
        label: "Visão geral",
        href: "/users",
        icon: <PiSquaresFourDuotone />,
      },
      {
        label: "Manual de utilização",
        href: "/docs",
        icon: <PiBookOpenTextDuotone />,
      },
    ],
  },
  {
    header: t`Resources`,
    items: [
      {
        label: t`Customers`,
        href: "/resources/customers",
        icon: <PiUsersDuotone />,
      },
    ],
  },
  {
    header: "Área Financeira",
    items: [
      {
        label: "Contas bancárias",
        href: "/bank-accounts",
        icon: <PiBankDuotone />,
      },
      {
        label: "Transações",
        href: "/transactions",
        icon: <PiCashRegisterDuotone />,
      },
    ],
  },
  {
    header: "Área Técnica",
    items: [
      {
        label: "Lojas e corretoras",
        icon: <PiBuildingsDuotone />,
        href: "/brokers",
      },
      {
        label: "Definições",
        icon: <PiGearSixDuotone />,
        href: "/settings",
        subItems: [
          {
            label: "Gêneros",
            href: "/settings/genres",
          },
          {
            label: "Estados civis",
            href: "/settings/marital-statuses",
          },
          {
            label: "Profissões",
            href: "/settings/jobs",
          },
        ],
      },
    ],
  },
];

export function DashboardSidebar() {
  return <Sidebar hideDivider sections={sections} />;
}
