import { Col, Row, Drawer } from "antd";

import Link from "next/link";
import { useEffect, useState } from "react";
import Login from "../../Login";
import classes from "./Header.module.scss";
import { useSelector } from "react-redux";

import { CgProfile, CgLogIn } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";

export default function Header() {
  // SIAVASH------------------------------------------------------------------------------------------
  const user = useSelector((state) => state.user);
  console.log("Details User in Head Site => ", user);
  // SIAVASH-------------------------------------------------------------------------------------------
  const [flag, setFlag] = useState(false);
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Row justify="space-around" className={classes.header}>
        <Col span={4} className={classes.logo}>
          <Link href="/">
            <div className={classes.logobg} />
          </Link>
        </Col>
        <Col span={10} className={classes.menu}>
          <ul>
            <Link href="/">
              <a>
                <li className={classes.home}>خانه</li>
              </a>
            </Link>
            <Link href="/category/history">
              <a>
                <li className={classes.history}>تاریخی</li>
              </a>
            </Link>
            <Link href="/category/political">
              <a>
                <li className={classes.political}>سیاسی</li>
              </a>
            </Link>
            <Link href="/category/story">
              <a>
                <li className={classes.story}>ادبیات و داستان</li>
              </a>
            </Link>
          </ul>
        </Col>
        <Col span={10} className={classes.menu}>
          <ul style={{ justifyContent: "center" }}>
            {login && (
              <li
                className={classes.login}
                onClick={() => {
                  setFlag(true);
                }}
              >
                ورود
                <CgLogIn style={{ marginBottom: "-6px", marginRight: 5 }} />
              </li>
            )}
            {user && (
              <>
                <Link href="/cart">
                  <a>
                    <li className={classes.cart}>
                      <BsCart4 />
                    </li>
                  </a>
                </Link>
                <li className={classes.profile}>
                  <CgProfile
                    style={{ display: "inline-block" }}
                    onClick={showDrawer}
                  />
                  <Drawer
                    className={classes.drawer}
                    title={`خوش آمدید ${user} `}
                    placement="left"
                    onClose={onClose}
                    visible={visible}
                  >
                    <p>Some contents...</p>
                    <p> علاقه مندی ها</p>
                    <p> خروج</p>
                  </Drawer>
                </li>
              </>
            )}
          </ul>
        </Col>
      </Row>
      {flag && (
        <>
          <Login setFlag={setFlag} setLogin={setLogin} />
        </>
      )}
    </div>
  );
}
