import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const InnerLayoutHeader = () => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const handleHover = (visible: boolean) => {
    setIsHover(visible);
  };

  const items = [
    {
      key: 1,
      label: "TRANG CHỦ",
    },
    {
      key: 2,
      label: "NỘI THẤT PHÒNG KHÁCH",
      subItems: [
        {
          key: 2.1,
          label: "TRANG CHỦ",
        },
        {
          key: 2.2,
          label: "TRANG CHỦ",
        },
      ],
    },
  ];

  return (
    <div className="innerlayout-header" id="layout-header">
      <div className="menu">
        <div onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
          <Menu mode="horizontal" className={isHover ? "header-menu hover" : "header-menu"}>
            <Menu.Item
              key="home"
              onClick={() => {
                router.push("/");
              }}
            >
              TRANG CHỦ
            </Menu.Item>
            <Menu.SubMenu key={"livingroom"} title="NỘI THẤT PHÒNG KHÁCH" icon={<DownOutlined />}>
              <Menu.Item key="product1">Product 1</Menu.Item>
              <Menu.Item key="product2">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={"beedroom"} title="NỘI THẤT PHÒNG NGỦ" icon={<DownOutlined />}>
              <Menu.Item key="product3">Product 1</Menu.Item>
              <Menu.Item key="product4">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key={"tabernacleroom"} title="NỘI THẤT PHÒNG THỜ" icon={<DownOutlined />}>
              <Menu.Item key="product5">Product 1</Menu.Item>
              <Menu.Item key="product6">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="contact">LIÊN HỆ</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};
