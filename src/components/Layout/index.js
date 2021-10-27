import Footer from "./Footer";
import Header from "./Header";
import {useEffect} from "react";
import authentication from "../../store/actions/actions";
// import classes from "./Layout.module.scss"

export default function Layout({ children }) {
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
