import {Row, Col} from "antd";
import classes from "./SinglePage.module.scss";
import authentication from "../../store/actions/actions";
import {useState} from "react";
import {useSelector} from "react-redux";

export default function SinglePage({post}) {
  const [flag, setFlag] = useState(true)
    const [number, setNumber] = useState(1)
    return (
        <div>
            <Row gutter={[20]}>
                <Col span={12}>
                    <img width="100%" src={post.cover.fields.file.url}/>
                </Col>
                <Col span={12}>
                    <h1>{post.title}</h1>
                    <h2>نویسنده : {post.author}</h2>
                    <h3>قیمت : {post.price}</h3>
                  {flag ? (
                      <>
                          <button onClick={() => {
                              authentication.addCart({...post, count: number})
                              setFlag(!flag)
                          }}>اضافه به سبد خرید
                          </button>
                          <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
                      </>
                  ) : (
                      <button onClick={() => {
                        authentication.removeCart(post)
                        setFlag(!flag)
                      }}>حذف از سبد خرید
                      </button>
                  )}
                </Col>
            </Row>
        </div>
    );
}
