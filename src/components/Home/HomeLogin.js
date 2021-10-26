import { Col, Row } from "antd";
import classes from "./Home.module.scss";
import Link from "next/link";
import Login from "../Login";

export default function HomeLogin() {
  return (
    <div>
      <Row className={classes.login}>
        <Col span={12} className={classes.loginbgtxt}>
          <div className={classes.loginbox}>
            <div className={classes.logintxt}>
              <h1>به جمع کتاب خوان ها اضافه شو !</h1>
              <h2>همین الان ثبت نام کن</h2>
              <button>ثبت نام</button>
            </div>
          </div>
        </Col>
        <Col span={12} className={classes.loginbg} />
      </Row>
    </div>
  );
}
