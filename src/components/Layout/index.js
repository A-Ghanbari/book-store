import { Row, Col } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";
import classes from "./Layout.module.scss";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import authentication from "../../store/actions/actions";
// import classes from "./Layout.module.scss"

export default function Layout({ children }) {
    const cart = useSelector(state => state.cart)
    useEffect(() => {
        authentication.loadCartLocalStorage()
        authentication.loadBookMarkLocalStorage()
    }, [])
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
