import { Row, Col } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";
import classes from "./Layout.module.scss";
// import classes from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
