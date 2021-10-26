import {Col, Row, Drawer} from "antd";
import Link from "next/link";
import {useEffect, useState} from "react";
import Login from "../../Login";
import classes from "./Header.module.scss";
import {useSelector} from "react-redux";
import {CgProfile, CgLogIn, CgLogOut} from "react-icons/cg";
import {BsCart4} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import authentication from "../../../store/actions/actions";
import Cookies from "js-cookie";

export default function Header() {
    useEffect(() => {
        if (Cookies.get('token')) {
            const [user, pass] = localStorage.getItem('authentication').split(',')
            authentication.login({user, pass})
        }
    }, [])
    const user = useSelector((state) => state.user);
    const [flag, setFlag] = useState(false);
    const [visible, setVisible] = useState(false);
    const [login, setLogin] = useState(true);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <Row justify="space-around" className={classes.header}>
                <Col span={4} className={classes.logo}>
                    <Link href="/">
                        <div className={classes.logobg}/>
                    </Link>
                </Col>
                <Col span={10} className={classes.menu}>
                    <ul>
                        <Link href="/">
                            <a>
                                <li className={classes.home}>خانه</li>
                            </a>
                        </Link>
                        <Link href="/category/history">
                            <a>
                                <li className={classes.history}>تاریخی</li>
                            </a>
                        </Link>
                        <Link href="/category/political">
                            <a>
                                <li className={classes.political}>سیاسی</li>
                            </a>
                        </Link>
                        <Link href="/category/story">
                            <a>
                                <li className={classes.story}>ادبیات و داستان</li>
                            </a>
                        </Link>
                    </ul>
                </Col>
                <Col span={10} className={classes.menu}>
                    <ul style={{justifyContent: "center"}}>
                        {user ? (
                            <>
                                <Link href="/cart">
                                    <a>
                                        <li className={classes.cart}>
                                            <BsCart4/>
                                        </li>
                                    </a>
                                </Link>
                                <li className={classes.profile}>
                                    <CgProfile
                                        style={{display: "inline-block"}}
                                        onClick={showDrawer}
                                    />
                                    <Drawer
                                        className={classes.drawer}
                                        title={`خوش آمدید ${user} `}
                                        placement="left"
                                        onClose={onClose}
                                        visible={visible}
                                    >
                                        <Link href="/cart">
                                            <a>
                                                <div>
                                                    سبد خرید
                                                    <BsCart4
                                                        style={{marginBottom: "-4px", marginRight: 5}}
                                                    />
                                                </div>
                                            </a>
                                        </Link>
                                        <Link href="/favorites">
                                            <a>
                                                <div style={{margin: "20px 0"}}>
                                                    علاقه مندی ها
                                                    <AiFillHeart
                                                        style={{marginBottom: "-3px", marginRight: 5}}
                                                    />
                                                </div>
                                            </a>
                                        </Link>
                                        <div
                                            className={classes.logout}
                                            onClick={() => {
                                                authentication.logout(user), setLogin(true);
                                            }}
                                        >
                                            خروج
                                            <CgLogOut
                                                style={{marginBottom: "-6px", marginRight: 5}}
                                            />
                                        </div>
                                    </Drawer>
                                </li>
                            </>
                        ) : (
                            <>
                                <li
                                    className={classes.login}
                                    onClick={() => {
                                        setFlag(true);
                                    }}
                                >
                                    ورود
                                    <CgLogIn style={{marginBottom: "-6px", marginRight: 5}}/>
                                </li>
                            </>
                        )}
                    </ul>
                </Col>
            </Row>
            {flag && (
                <>
                    <Login setFlag={setFlag} setLogin={setLogin}/>
                </>
            )}
        </div>
    );
}
