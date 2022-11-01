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
const categories = {
  mostSold: "Mais Vendidos",
  books: "Livros",
  eletronics: "Eletrônicos",
  computers: "Computadores",
  games: "Games",
  toys: "Brinquedos",
  petshop: "Petshop",
  home: "Casa",
  electroDomestics: "Eletrodomesticos",
  used: "Usados",
};

const headerElements = [];

for (const [key, value] of Object.entries(categories)) 
{
  headerElements.push(
    <Link to="/categories" key={key} state={key} className="categories">
      {value}
    </Link>
  );
};

const Header = () => {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <Link to="/">
              <img src={MdLogo} alt="Logo MercadoDex" className="logo"></img>
            </Link>
            <Search
              size="large"
              placeholder="Estou procurando..."
              enterButton
              className="searchBar"
            />

            <Button
              key="1"
              type="text"
              icon={<UserOutlined className="header-buttons" />}
            ></Button>

            <Tooltip
              title={
                account ? (
                  <span>{account.slice(0, 8)}...</span>
                ) : (
                  "Faça login aqui!"
                )
              }
            >
              <Button
                key="2"
                type="text"
                icon={<WalletOutlined className="header-buttons" />}
                onClick={() =>
                  authenticate({
                    signingMessage: "Assinatura para usar o Mercado DEX",
                  })
                }
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
          <Space
            style={{ fontWeight: "600", fontSize: "18px", cursor: "pointer" }}
          >
            <MenuOutlined />
            Categorias
          </Space>
          {headerElements.map((element) => (element))}
        </Space>
      </div>
    </div>
  );
};

export default Header;
