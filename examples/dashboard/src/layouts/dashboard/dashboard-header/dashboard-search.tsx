import { createSpotlight, Spotlight, type SpotlightActionData } from "@mantine/spotlight";
import { SpotlightSearchBarButton } from "@naplaca/mantine-components/components/spotlight-search-bar-button";
import {
  PiFileDuotone,
  PiHouseDuotone,
  PiSquaresFourDuotone,
  PiMagnifyingGlassBold as SearchIcon,
} from "react-icons/pi";

export const [searchStore, searchHandlers] = createSpotlight();

export function DashboardSearch() {
  const actions: SpotlightActionData[] = [
    {
      id: "home",
      label: "Home",
      description: "Get to home page",
      leftSection: <PiHouseDuotone size="1.5rem" />,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      description: "Get full information about current system status",
      leftSection: <PiSquaresFourDuotone size="1.5rem" />,
    },
    {
      id: "documentation",
      label: "Documentation",
      description: "Visit documentation to lean more about all features",
      leftSection: <PiFileDuotone size="1.5rem" />,
    },
  ];

  return (
    <SpotlightSearchBarButton
      handlers={searchHandlers}
      placeholder="Search for feature"
      w={{ base: "fit-content", md: "16rem" }}
      spotlight={
        <Spotlight
          store={searchStore}
          actions={actions}
          shortcut={["mod + K"]}
          nothingFound="Nada foi encontrado..."
          highlightQuery
          searchProps={{
            leftSection: <SearchIcon />,
            placeholder: "Procurar por funcionalidade",
          }}
        />
      }
    />
  );
}
