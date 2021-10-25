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
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Row justify="space-around" className={classes.header}>
        <Col span={5} className={classes.logo}>
          <Link href="/">
            <div className={classes.logobg} />
          </Link>
        </Col>
        <Col span={19} className={classes.menu}>
          <ul>
            <Link href="/">
              <a className={classes.home}>
                <li>خانه</li>
              </a>
            </Link>
            <Link href="/category/history">
              <a className={classes.history}>
                <li>تاریخی</li>
              </a>
            </Link>
            <Link href="/category/political">
              <a className={classes.political}>
                <li>سیاسی</li>
              </a>
            </Link>
            <Link href="/category/story">
              <a className={classes.story}>
                <li>ادبیات و داستان</li>
              </a>
            </Link>
            <li
              className={classes.button}
              onClick={() => {
                setFlag(true);
              }}
            >
              ورود
              <CgLogIn />
            </li>
            <li>
              <Link href="/cart">
                <a>
                  <BsCart4 />
                </a>
              </Link>
            </li>
            {/*SIAVASH-------------------------------------------------------------*/}
            <li>
              {user && (
                <>
                  <CgProfile
                    style={{ display: "inline-block" }}
                    onClick={showDrawer}
                  />
                  <Drawer
                    title={`خوش آمدید ${user} `}
                    placement="left"
                    onClose={onClose}
                    visible={visible}
                  >
                    <p>Some contents...</p>
                    <p> علاقه مندی ها</p>
                    <p> خروج</p>
                  </Drawer>
                </>
              )}
            </li>
            {/*SIAVASH---------------------------------------------------------------*/}
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
