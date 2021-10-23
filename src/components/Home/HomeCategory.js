import { Col, Row } from "antd";
import classes from "./Home.module.scss";
import Link from "next/link";

export default function HomeCategory() {
  return (
    <div>
      <Row justify="space-around" className={classes.cats}>
        <Col span={5} className={classes.cat}>
          <Link href="/category/history">
            <a>
              <div className={classes.his} />
              <h1>تاریخی</h1>
            </a>
          </Link>
        </Col>
        <Col span={5} className={classes.cat}>
          <Link href="/category/political">
            <a>
              <div className={classes.pol} />
              <h1>سیاسی</h1>
            </a>
          </Link>
        </Col>
        <Col span={5} className={classes.cat}>
          <Link href="/category/story">
            <a>
              <div className={classes.sto} />
              <h1>داستان</h1>
            </a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
