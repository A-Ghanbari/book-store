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
      <Row justify="space-between" style={{ padding: "0 70px" }}>
        <Col span={19} className={classes.main}>
          <main>{children}</main>
        </Col>
        <Col span={4}>
          <Sider />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
