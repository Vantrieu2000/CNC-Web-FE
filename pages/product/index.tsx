import { api } from "@/api/index";
import { CustomHandleError, CustomHandleSuccess } from "@/api/responseHandler";
import success from "@/locale/ja-JP/success";
import { ResponseError } from "@/type/api";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { Page } from "lib/layout/Page";
import { useState } from "react";

const Create = () => {
  const queryClient = useQueryClient();

  const { mutate: CreateProduct, status: statusCreateProduct } = useMutation(api.Product.createProduct, {
    onSuccess: (data) => {
      CustomHandleSuccess(data.status);
    },
    onError: (error: ResponseError) => {
      CustomHandleError("Thất bại");
    },
  });

  return <div className="my-4"></div>;
};

export default Page(Create, "InnerLayout", "homepage", "public");
