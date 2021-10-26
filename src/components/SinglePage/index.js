import {Row, Col, Button} from "antd";
import classes from "./SinglePage.module.scss";
import authentication from "../../store/actions/actions";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function SinglePage({post}) {
    const [flagCart, setFlagCart] = useState(false)
    const [flagMark, setFlagMark] = useState(false)
    const [number, setNumber] = useState(1)
    useEffect(() => {
        if (localStorage.getItem('bookMark')) {
            const booksMark = new Map(JSON.parse(localStorage.bookMark));
            const keyBookMark = [...booksMark.keys()]
            setFlagMark(keyBookMark.includes(post.title))
        }
        if (localStorage.getItem('cart')) {
            const booksMark = new Map(JSON.parse(localStorage.cart));
            const keyBookMark = [...booksMark.keys()]
            setFlagCart(keyBookMark.includes(post.title))
        }
    }, [])

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
                    {flagCart ? (
                        <Button onClick={() => {
                            authentication.removeCart(post)
                            setFlagCart(!flagCart)
                        }}>حذف از سبد خرید
                        </Button>
                    ) : (
                        <>
                            <Button onClick={() => {
                                authentication.addCart({...post, count: number})
                                setFlagCart(!flagCart)
                            }}>اضافه به سبد خرید
                            </Button>
                            <input type='number' value={number} max={5} min={1} onChange={(e) => setNumber(e.target.value)}/>
                        </>
                    )}
                    {flagMark ? (
                        <Button onClick={() => {
                            authentication.dislike(post)
                            setFlagMark(!flagMark)
                        }}>Dislike</Button>
                    ) : (
                        <Button onClick={() => {
                            authentication.like(post)
                            setFlagMark(!flagMark)
                        }}>Like</Button>
                    )}
                </Col>
            </Row>
        </div>
    );
}
