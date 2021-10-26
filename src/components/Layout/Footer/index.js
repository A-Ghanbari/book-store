import { Row, Col } from "antd";
import Link from "next/link";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Row justify="space-between">
        <Col xs={24} md={6}>
          <ul>
            <li>
              <Link href="/">
                <a>صفحه اصلی</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>درباره ما</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={9}>
          <ul>
            <li>کتاب ها :</li>
            <li>
              <Link href="/category/history">
                <a>تاریخی</a>
              </Link>
            </li>
            <li>
              <Link href="/category/political">
                <a>سیاسی</a>
              </Link>
            </li>
            <li>
              <Link href="/category/story">
                <a>ادبیات و داستان</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={4}>
          <img
            width="50%"
            src={
              "https://www.freepnglogos.com/uploads/book-png/book-clipart-transparent-17.png"
            }
          />
        </Col>
      </Row>
    </div>
  );
}
