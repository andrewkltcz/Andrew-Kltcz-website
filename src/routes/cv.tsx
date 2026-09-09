import { createFileRoute } from "@tanstack/react-router";

import { TimelinePage } from "./index";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [{ title: "Endre Kulutácz — CV" }],
  }),
  component: TimelinePage,
});