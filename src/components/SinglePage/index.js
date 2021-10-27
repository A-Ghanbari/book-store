import {Row, Col, message, Rate} from "antd";
import classes from "./SinglePage.module.scss";
import authentication from "../../store/actions/actions";
import {useEffect, useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useSelector} from "react-redux";

export default function SinglePage({post}) {
    const user = useSelector(state => state.user)
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

    const key = 'updatable';

    const openMessage = () => {
        message.loading({content: 'صبر کنید...', key});
        setTimeout(() => {
            message.warning({content: 'ابتدا وارد حساب شوید !', key, duration: 2});
        }, 1000);
    };
    const desc = ['ضعیف', 'متوسط', 'خوب', 'عالی'];
    return (
        <div className={classes.card}>
            <Row gutter={[20, 20]}>
                <Col span={10} className={classes.cover}>
                    <img src={post.cover.fields.file.url}/>
                </Col>
                <Col span={14} className={classes.title}>
                    <h1>{post.title}</h1>
                    <h2>نویسنده : {post.author}</h2>
                    {user ? (
                        <>
                            {flagMark ? (
                                <div
                                    className={classes.like}
                                    onClick={() => {
                                        authentication.dislike(post);
                                        setFlagMark(!flagMark);
                                    }}
                                >
                                    <AiFillHeart/>
                                </div>
                            ) : (
                                <div
                                    className={classes.like}
                                    onClick={() => {
                                        authentication.like(post);
                                        setFlagMark(!flagMark);
                                    }}
                                >
                                    <AiOutlineHeart/>
                                </div>
                            )}
                            {flagCart &&
                            <Rate style={{backgroundColor: '#36516a', borderRadius: '50%', border: "4px solid #36516a"}}
                                  tooltips={desc} count={4}/>}
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
                                            authentication.addCart({...post, count: number});
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
                        </>
                    ) : (
                        <>
                            <div className={classes.like} onClick={() => {
                                openMessage()
                            }}><AiOutlineHeart/></div>
                            <h2>قیمت : {post.price}</h2>
                            <div>
                                <button
                                    className={classes.addbtn}
                                    onClick={() => {
                                        openMessage()
                                    }}>
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
                        </>
                    )}
                </Col>
                <Col span={24} className={classes.overview}>
                    <h2>{`قسمتی از ${post.title}`}</h2>
                    <div>
                        {post.overview.content[0].content[0].value}
                    </div>
                </Col>
                <Col span={24}>
                    <h2>درباره نویسنده</h2>
                </Col>
                <Col span={4}>
                    <img
                        style={{borderRadius: "50%"}}
                        src={post.authorCover.fields.file.url}
                    />
                </Col>
                <Col span={17}>
                    <h1>{post.author}</h1>
                    <div>
                        {post.authorOverview.content[0].content[0].value}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
