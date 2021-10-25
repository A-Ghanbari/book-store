import Layout from "../components/Layout";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "swiper/swiper-bundle.css";
import NextNprogress from "nextjs-progressbar";
import { ConfigProvider } from "antd";
import faIR from "antd/lib/locale/fa_IR";
import {Provider} from "react-redux";
import store from "../store/store";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={faIR} direction="rtl">
        <NextNprogress
          color="yellow"
          startPosition={0.6}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
