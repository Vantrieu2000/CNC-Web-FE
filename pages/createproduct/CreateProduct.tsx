import { api } from "@/api/index";
import { CustomHandleError, CustomHandleSuccess } from "@/api/responseHandler";
import { ResponseError } from "@/type/api";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Upload, message } from "antd";
import { Page } from "lib/layout/Page";
import { useState } from "react";

const Create = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const { mutate: CreateProduct, status: statusCreateProduct } = useMutation(api.Product.createProduct, {
    onSuccess: (data) => {
      CustomHandleSuccess(data.status);
    },
    onError: (error: ResponseError) => CustomHandleError(error),
  });

  const addImageUrl = (newImageUrl: string) => {
    setImageUrl((prevUrls) => [...prevUrls, newImageUrl]);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      form.resetFields(["avatar"]);
      message.error("Error");
    }

    const isLt4M = file.size / 2048 / 2048 < 2;

    if (!isLt4M) {
      form.resetFields(["avatar"]);

      message.error("画像は10MB未満である必要があります！");
    }
    return isJpgOrPng && isLt4M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done" || info.file.status === "error") {
      form.setFieldsValue({
        images: info?.file?.response?.data?.filename as string,
      });
      addImageUrl(info?.file?.response?.data?.filename as string);
    }
  };

  const onFinsh = (e) => {
    CreateProduct({
      ...e,
      images: imageUrl,
    });
  };

  return (
    <div className="my-4">
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} form={form} layout="horizontal" onFinish={onFinsh}>
        <Form.Item label="Tên" name={"name"}>
          <Input />
        </Form.Item>
        <Form.Item label="Chất liệu" name={"material"}>
          <Input />
        </Form.Item>
        <Form.Item label="Kích cỡ" name={"size"}>
          <Input />
        </Form.Item>
        <Form.Item label="Giá tiền" name={"price"}>
          <Input />
        </Form.Item>
        <Form.Item label="Màu " name={"color"}>
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả" name={"description"}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Chi tiết" name={"detail"}>
          <Input />
        </Form.Item>
        <Form.Item label="Ảnh" name={"images"}>
          <Upload
            beforeUpload={beforeUpload}
            method={"post"}
            action={`${process.env.API_BASE_URL}/upload`}
            listType="picture-card"
            onChange={handleChange}
            name="image"
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label=" ">
          <Button htmlType="submit"> Create Product </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Page(Create, "InnerLayout", "homepage", "public");
