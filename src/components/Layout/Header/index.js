import { Col, Row } from "antd";
import Link from "next/link";
import { useState } from "react";
import Login from "../../Login";
import classes from "./Header.module.scss";

export default function Header() {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <Row justify="space-around" className={classes.header}>
        <Col span={5} className={classes.logo}>
          Book Store
        </Col>
        <Col span={19} className={classes.menu}>
          <ul>
            <Link href="/">
              <a>
                <li>خانه</li>
              </a>
            </Link>
            <Link href="/category/history">
              <a>
                <li>تاریخی</li>
              </a>
            </Link>
            <Link href="/category/political">
              <a>
                <li>سیاسی</li>
              </a>
            </Link>
            <Link href="/category/story">
              <a>
                <li>ادبیات و داستان</li>
              </a>
            </Link>
            <li>
              <button
                className={classes.button}
                onClick={() => {
                  setFlag(true);
                }}
              >
                ورود و عضویت
              </button>
            </li>
            <li>
              <Link href="/cart">
                <a>
                  <button style={{ color: "red" }}>سبد خرید</button>
                </a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      {flag && (
        <>
          <Login flag={flag} />
          <button className={classes.close} onClick={() => setFlag(false)}>
            X
          </button>
        </>
      )}
    </div>
  );
}
