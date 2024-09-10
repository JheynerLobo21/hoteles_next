"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const client = new QueryClient({
    defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
  });

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
