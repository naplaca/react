import { useMediaQuery } from "#/hooks/use-media-query";
import { usePathname } from "#/hooks/use-pathname";
import { t } from "@lingui/core/macro";
import { Badge, Group, Select, type ComboboxItem } from "@mantine/core";
import { Sidebar, type SidebarProps, type SidebarSectionProps } from "@naplaca/mantine-components/components/sidebar";
import { useNavigate } from "@tanstack/react-router";
import { useMemo, type ReactNode } from "react";
import {
  PiPaperclipDuotone as AttachmentsIcon,
  PiPhoneDuotone as CallsIcon,
  PiChatCircleDuotone as ChatIcon,
  PiEnvelopeDuotone as EmailsIcon,
  PiInvoiceDuotone as InvoiceIcon,
  PiNoteDuotone as NotesIcon,
  PiWalletDuotone as PaymentsIcon,
  PiIdentificationCardDuotone as ProfileIcon,
  PiHeadsetDuotone as SupportIcon,
  PiCheckSquareDuotone as TasksIcon,
} from "react-icons/pi";
import type { Customer } from "../schema";

interface CustomerSidebarProps extends Omit<SidebarProps, "sections"> {
  customer: Customer;
}

export function CustomerSidebar({ customer, ...props }: CustomerSidebarProps) {
  const isMd = useMediaQuery("md");
  const pathname = usePathname();
  const navigate = useNavigate();

  const sections: SidebarSectionProps[] = [
    {
      header: customer.id,
      items: [
        {
          label: t`Profile`,
          icon: <ProfileIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/profile`,
        },
        {
          label: t`Invoices`,
          icon: <InvoiceIcon color="inherit" />,
          badge: (
            <Badge variant="default" size="sm">
              3
            </Badge>
          ),
          href: `/resources/customers/${customer.id}/invoices`,
        },
        {
          label: t`Payments`,
          icon: <PaymentsIcon color="inherit" />,
          badge: (
            <Badge variant="default" size="sm">
              2
            </Badge>
          ),
          href: `/resources/customers/${customer.id}/payments`,
        },
        {
          label: t`Chat`,
          icon: <ChatIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/chat`,
        },
        {
          label: t`Calls`,
          icon: <CallsIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/calls`,
        },
        {
          label: t`Emails`,
          icon: <EmailsIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/emails`,
        },
        {
          label: t`Tasks`,
          icon: <TasksIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/tasks`,
        },
        {
          label: t`Support`,
          icon: <SupportIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/support`,
        },
        {
          label: t`Notes`,
          icon: <NotesIcon color="inherit" />,
          badge: (
            <Badge variant="default" size="sm">
              1
            </Badge>
          ),
          href: `/resources/customers/${customer.id}/notes`,
        },
        {
          label: t`Attachments`,
          icon: <AttachmentsIcon color="inherit" />,
          href: `/resources/customers/${customer.id}/attachments`,
        },
      ],
    },
  ];

  const [options, metadata] = useMemo(() => {
    const opts: ComboboxItem[] = [];
    const metadata: Record<string, { icon: ReactNode; badge: ReactNode }> = {};

    sections.forEach((section) => {
      section.items.forEach((item) => {
        opts.push({ value: item.href, label: item.label });
        metadata[item.href] = { icon: item.icon, badge: item.badge };
      });
    });

    return [opts, metadata];
  }, [customer.id]);

  return isMd ? (
    <Sidebar sections={sections} {...props} />
  ) : (
    <Select
      w="100%"
      value={pathname}
      data={options}
      allowDeselect={false}
      onChange={(value) => navigate({ to: value ?? "" })}
      renderOption={({ option, checked }) => (
        <Group justify="space-between" w="100%" c={checked ? "primary" : "inherit"}>
          <Group gap="xs">
            {metadata[option.value].icon}
            {option.label}
          </Group>
          {metadata[option.value].badge}
        </Group>
      )}
    />
  );
}
