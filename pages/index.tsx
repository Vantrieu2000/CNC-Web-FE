import { api } from "@/api/index";
import { CustomHandleError } from "@/api/responseHandler";
import Button from "@/components/Button";
import { APP_SETTING } from "@/constant/app-settings";
import { ValidateLibrary } from "@/validate/index";
import { useMutation } from "@tanstack/react-query";
import { Form, Input, Checkbox } from "antd";
import { Page } from "lib/layout/Page";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const { mutate, status } = useMutation(api.Auth.login, {
    onSuccess: (data) => {
      localStorage.setItem(APP_SETTING.localStorageToken, data.token);
      void router.push("/dashboard");
    },
    onError: (error) => {
      CustomHandleError(error);
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  const autoCompleteMode = "on";
  // localStorage.getItem('saveInfo') === 'true' ? 'on' : 'new-password';

  return <div className="hompage">HomePage</div>;
}

export default Page(Home, "InnerLayout", "homepage", "public");
