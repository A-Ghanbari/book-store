import { Row, Col, Button } from "antd";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import classes from "./SinglePage.module.scss";
import authentication from "../../store/actions/actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function SinglePage({ post }) {
  const [flagCart, setFlagCart] = useState(false);
  const [flagMark, setFlagMark] = useState(false);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    if (localStorage.getItem("bookMark")) {
      const booksMark = new Map(JSON.parse(localStorage.bookMark));
      setFlagMark(booksMark.get(post.title) ? true : false);
    }
    if (localStorage.getItem("cart")) {
      const carts = new Map(JSON.parse(localStorage.cart));
      setFlagCart(carts.get(post.title) ? true : false);
    }
  }, []);
  console.log(post);
  return (
    <div className={classes.card}>
      <Row gutter={[20, 20]}>
        <Col span={10} className={classes.cover}>
          <img src={post.cover.fields.file.url} />
        </Col>
        <Col span={14} className={classes.title}>
          <h1>{post.title}</h1>
          <h2>نویسنده : {post.author}</h2>
          {flagMark ? (
            <div
              className={classes.like}
              onClick={() => {
                authentication.dislike(post);
                setFlagMark(!flagMark);
              }}
            >
              <AiFillHeart />
            </div>
          ) : (
            <div
              className={classes.like}
              onClick={() => {
                authentication.like(post);
                setFlagMark(!flagMark);
              }}
            >
              <AiOutlineHeart />
            </div>
          )}
          <h2>قیمت : {post.price}</h2>

          {flagCart ? (
            <button
              className={classes.removebtn}
              onClick={() => {
                authentication.removeCart(post);
                setFlagCart(!flagCart);
              }}
            >
              حذف از سبد خرید
            </button>
          ) : (
            <div>
              <button
                className={classes.addbtn}
                onClick={() => {
                  authentication.addCart({ ...post, count: number });
                  setFlagCart(!flagCart);
                }}
              >
                اضافه به سبد خرید
              </button>
              <input
                className={classes.input}
                type="number"
                value={number}
                max={5}
                min={1}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          )}
        </Col>
        <Col span={24} className={classes.overview}>
          <h2>{`قسمتی از ${post.title}`}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.overview),
            }}
          />
        </Col>
        <Col span={24}>
          <h2>درباره نویسنده</h2>
        </Col>
        <Col span={4}>
          <img
            style={{ borderRadius: "50%" }}
            src={post.authorCover.fields.file.url}
          />
        </Col>
        <Col span={17}>
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
