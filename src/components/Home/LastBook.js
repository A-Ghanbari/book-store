import { Col, Row } from "antd";
import classes from "./Home.module.scss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Link from "next/link";

export default function LastBook({ book }) {
  return (
    <div className={classes.lastbook}>
      <div className={classes.lastbg}>
        <Row className={classes.lastcard}>
          <Col span={16}>
            <h1>{book.fields.title}</h1>
            <h2>نویسنده : {book.fields.author}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(book.fields.overview),
              }}
            />
          </Col>
          <Col span={8}>
            <Link href={`/book/${book.sys.id}`}>
              <a>
                <img src={book.fields.cover.fields.file.url} />
              </a>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
