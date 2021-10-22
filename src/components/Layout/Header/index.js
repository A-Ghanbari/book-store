import { Col, Row } from "antd";
import Link from "next/link";
import classes from "./Header.module.scss";

export default function Header() {
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
            <Link href="/history">
              <a>
                <li>تاریخی</li>
              </a>
            </Link>
            <Link href="/political">
              <a>
                <li>سیاسی</li>
              </a>
            </Link>
            <Link href="/story">
              <a>
                <li>ادبیات و داستان</li>
              </a>
            </Link>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
