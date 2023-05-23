import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import AntdDefaultThemeConfigs from "@/constant/antd-defaults";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function AppWrapper({ children, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ConfigProvider theme={AntdDefaultThemeConfigs}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

/* eslint-disable @typescript-eslint/naming-convention */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper pageProps={pageProps}>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
