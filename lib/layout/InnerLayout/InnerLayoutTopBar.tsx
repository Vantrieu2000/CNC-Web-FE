import { Input } from "antd";
import { FacebookFilled } from "@ant-design/icons";

const { Search } = Input;

export const InnerLayoutTopBar = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <div className="innerlayout-topbar">
      <div className="innerlayout-topbar__logo">This is logo</div>
      <div className="innerlayout-topbar__search">
        <Search placeholder="Tìm kiếm sản phẩm...." size="large" onSearch={onSearch} enterButton />
      </div>
      <div className="innerlayout-topbar__hotline">
        <div className="hotline__content">
          Hotline: <a href="tel:098 1767976">098 1767976</a>
        </div>
      </div>
      <div className="innerlayout-topbar__social">
        <div className="logo-social">
          <FacebookFilled style={{ fontSize: "32px" }} />
        </div>
      </div>
    </div>
  );
};
