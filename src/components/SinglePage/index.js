import { Row, Col } from "antd";
import classes from "./SinglePage.module.scss";
import authentication from "../../store/actions/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function SinglePage({ post }) {
  const [flag, setFlag] = useState(true);
  const [number, setNumber] = useState(1);
  console.log(post);
  return (
    <div style={{ padding: 50 }}>
      <Row gutter={[20]} className={classes.card}>
        <Col span={9}>
          <img
            width="100%"
            style={{ borderRadius: 10 }}
            src={post.cover.fields.file.url}
          />
        </Col>
        <Col span={15}>
          <h1>{post.title}</h1>
          <h2>نویسنده : {post.author}</h2>
          <h3>قیمت : {post.price}</h3>

          {flag ? (
            <>
              <button
                className={classes.buttom}
                onClick={() => {
                  authentication.addCart({ ...post, count: number });
                  setFlag(!flag);
                }}
              >
                اضافه به سبد خرید
              </button>
              <input
                className={classes.input}
                type="number"
                max={5}
                min={1}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </>
          ) : (
            <button
              onClick={() => {
                authentication.removeCart(post);
                setFlag(!flag);
              }}
            >
              حذف از سبد خرید
            </button>
          )}
        </Col>
        <Col span={24} className={classes.overview}>
          <h1>قسمت هایی از {post.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.overview),
            }}
          />
        </Col>

        <Col span={4}>
          <img src={post.authorCover.fields.file.url} />
        </Col>
        <Col span={20}>
          <h1>{post.author}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.authorOverview),
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
