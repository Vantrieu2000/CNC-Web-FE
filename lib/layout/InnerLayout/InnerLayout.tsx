import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import React, { useEffect, useState } from "react";
import { InnerLayoutFooter } from "./InnerLayoutFooter";
import { InnerLayoutHeader } from "./InnerLayoutHeader";
import { InnerLayoutTopBar } from "./InnerLayoutTopBar";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [getItem("Option 11", "11"), getItem("Option 12", "12")]),
  ]),
];

export const InnerLayout = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("layout-header");
      if (header) {
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="innerlayout-root">
      <div className="innerlayout-page">
        <div className="innerlayout-wrapper">
          <InnerLayoutTopBar />
          <InnerLayoutHeader />
          <div className="innerlayout-content">{children}</div>
          <InnerLayoutFooter />
        </div>
      </div>
    </div>
  );
};
