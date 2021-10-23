import { Row, Col } from "antd";
import classes from "./SinglePage.module.scss";

export default function SinglePage({ post }) {
  return (
    <div>
      <Row gutter={[20]}>
        <Col span={12}>
          <img width="100%" src={post.cover.fields.file.url} />
        </Col>
        <Col span={12}>
          <h1>{post.title}</h1>
          <h2>نویسنده : {post.author}</h2>
          <h3>قیمت : {post.price}</h3>
          <button>اضافه به سبد خرید</button>
        </Col>
      </Row>
    </div>
  );
}
