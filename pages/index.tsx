import { api } from "@/api/index";
import { CustomHandleError } from "@/api/responseHandler";
import Button from "@/components/Button";
import { Categories } from "@/components/categorys";
import { APP_SETTING } from "@/constant/app-settings";
import { ValidateLibrary } from "@/validate/index";
import { useMutation } from "@tanstack/react-query";
import { Form, Input, Checkbox, Carousel } from "antd";
import { Page } from "lib/layout/Page";
import { useRouter } from "next/router";
import { useEffect } from "react";

const contentStyle: React.CSSProperties = {
  height: "280px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
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

  return (
    <div className="hompage" id="homepage">
      <div className="homepage-main">
        <div className="homepage-main__content">
          <div className="hompage-banner">
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}></h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
          <div className="homepage-intro">
            <div className="left">Đồ gỗ thủ công mỹ nghệ Hoài Xuân</div>
            <div className="right">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
        </div>
        <div className="homepage-main__category">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Page(Home, "InnerLayout", "homepage", "public");
