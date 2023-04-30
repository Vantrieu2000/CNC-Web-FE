import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import { useState } from "react";

export const InnerLayoutHeader = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (visible: boolean) => {
    setIsHover(visible);
  };
  return (
    <div className="innerlayout-header" id="layout-header">
      <div className="menu">
        <div onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
          <Menu mode="horizontal" className={isHover ? "header-menu hover" : "header-menu"}>
            <Menu.Item key="home">TRANG CHỦ</Menu.Item>
            <Menu.SubMenu title="NỘI THẤT PHÒNG KHÁCH" icon={<DownOutlined />}>
              <Menu.Item key="product1">Product 1</Menu.Item>
              <Menu.Item key="product2">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="NỘI THẤT PHÒNG NGỦ" icon={<DownOutlined />}>
              <Menu.Item key="product1">Product 1</Menu.Item>
              <Menu.Item key="product2">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="NỘI THẤT PHÒNG THỜ" icon={<DownOutlined />}>
              <Menu.Item key="product1">Product 1</Menu.Item>
              <Menu.Item key="product2">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="contact">LIÊN HỆ</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};
