"use client";

import { NextUIProvider } from "@nextui-org/react";

type ProvidersProp = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProp) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
