import { PageHeader, Button, Input, Space, Badge, Tooltip } from "antd";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "./Header.css";
import MdLogo from "../images/mercadodex-logo.png";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const categories = [
  "Mais vendidos",
  "Livros",
  "Eletrônicos",
  "Computadores",
  "Games",
  "Brinquedos",
  "Automotivo",
  "Petshop",
  "Casa",
  "Eletrodomesticos",
  "Usados",

];

const Header = () => {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ghost={true}
        extra={[
          <>
            <img src={MdLogo} className="logo"></img>
            <Search
              size="large"
              placeholder="Estou procurando..."
              enterButton
              className="searchBar"
            />

            <Button
              key="1"
              type="text"
              icon={<UserOutlined className="personData" />}
            ></Button>

            <Tooltip title={account ? (<span>{account.slice(0, 8)}...</span>) : "Not logged yet"}>
              <Button
                key="2"
                type="text"
                icon={<WalletOutlined className="walletLogin" />}
                onClick={() => authenticate()}
              ></Button>
            </Tooltip>

            <Badge count={0} showZero>
              <span className="header-buttons">
                <ShoppingCartOutlined className="header-icon" />
              </span>
            </Badge>
          </>,
        ]}
      ></PageHeader>

      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"large"}>
          <Space style={{ fontWeight: "600", fontSize: "18px", cursor: "pointer" }}>
            <MenuOutlined />
            Categorias
          </Space>
          {categories.map((e) => {
            return (
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default Header;
