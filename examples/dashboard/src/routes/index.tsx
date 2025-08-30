import { Button, Card, Center } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <Center>
      <Card>
        <Button>Click me</Button>
      </Card>
    </Center>
  );
}
