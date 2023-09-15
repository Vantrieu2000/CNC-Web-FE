import { CustomHandleError } from "@/api/responseHandler";
import { LoadingScreen } from "@/components/LoadingScreen";
import { APP_SETTING } from "@/constant/app-settings";
import { useIntl } from "@/function/useIntl";
import jaJP from "@/locale/ja-JP";
import { ResponseError } from "@/type/api";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { Children, useEffect } from "react";
import { api } from "../api";
import { AuthLayout } from "./AuthLayout/AuthLayout";
import { InnerLayout } from "./InnerLayout/InnerLayout";

const Layouts = {
  InnerLayout,
  AuthLayout,
};

export const Page = (
  Children,
  layout: keyof typeof Layouts,
  pageTitle = "app",
  pageVisiblity: "public" | "protected" = "protected"
) => {
  const intl = useIntl();
  const RenderPage = () => {
    switch (pageVisiblity) {
      case "public":
        return <PublicPage>{React.createElement(Layouts[layout], undefined, <Children />)}</PublicPage>;
      default:
        return <ProtectedPage>{React.createElement(Layouts[layout], undefined, <Children />)}</ProtectedPage>;
    }
  };
  // eslint-disable-next-line react/display-name
  return () => (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        <title>
          {intl.message(`title.${pageTitle}`, {
            fallbackId: "title.app",
          })}
        </title>
      </Head>
      <RenderPage />
    </>
  );
};

const PublicPage = ({ children }) => <>{children}</>;

const ProtectedPage = ({ children }) => {
  const intl = useIntl();
  const router = useRouter();
  const { isLoading, isError } = useQuery(["me"], api.Auth.me, {
    retry: 0,
    onError: (error) => {
      CustomHandleError({
        error: intl.message("error.UNAUTHORIZED"),
        message: intl.message("error.msg.NOT_FOUND_TOKEN"),
      });
      router.replace(APP_SETTING.loginPath);
    },
  });
  if (isLoading) return <LoadingScreen height="vh" />;
  if (isError) return <></>;

  return <>{children}</>;
};
