import { Col, Row } from "antd";
import classes from "./Category.module.scss";
import Link from "next/link";

export default function Category({ posts }) {
  return (
    <div style={{ padding: 50 }}>
      <Row gutter={[50, 20]}>
        {posts.map((post) => (
          <Col span={6} key={post.sys.id}>
            <div className={classes.card}>
              <Link href={`/book/${post.sys.id}`}>
                <a>
                  <img src={post.fields.cover.fields.file.url} />
                </a>
              </Link>
              <h2>{post.fields.title}</h2>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
