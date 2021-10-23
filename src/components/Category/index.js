import { Col, Row } from "antd";
import classes from "./Category.module.scss";
import Link from "next/link";

export default function Category({ posts }) {
  console.log(posts);
  return (
    <div>
      <Row gutter={[20, 20]}>
        {posts.map((post) => (
          <Col span={12} key={post.sys.id}>
            <Row className={classes.card}>
              <Col span={12}>
                <Link href={`/book/${post.sys.id}`}>
                  <a>
                    <img width="80%" src={post.fields.cover.fields.file.url} />
                  </a>
                </Link>
              </Col>
              <Col span={12}>{post.fields.title}</Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
}
