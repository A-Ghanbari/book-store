import {Col, Row, Drawer} from "antd";
import Link from "next/link";
import {useEffect, useState} from "react";
import Login from "../../Login";
import classes from "./Header.module.scss";
import {useSelector} from "react-redux";
import Cookies from "js-cookie";

import {CgProfile, CgLogIn} from "react-icons/cg";
import {BsCart4} from "react-icons/bs";
import authentication from "../../../store/actions/actions";

export default function Header() {
    const user = useSelector((state) => state.user);
    const [flag, setFlag] = useState(false);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (Cookies.get('token')) {
            const [user, pass] = localStorage.getItem('authentication').split(',')
                authentication.login({user, pass})
        }
    }, [])
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <Row justify="space-around" className={classes.header}>
                <Col span={5} className={classes.logo}>
                    <Link href="/">
                        <div className={classes.logobg}/>
                    </Link>
                </Col>
                <Col span={19} className={classes.menu}>
                    <ul>
                        <Link href="/">
                            <a className={classes.home}>
                                <li>خانه</li>
                            </a>
                        </Link>
                        <Link href="/category/history">
                            <a className={classes.history}>
                                <li>تاریخی</li>
                            </a>
                        </Link>
                        <Link href="/category/political">
                            <a className={classes.political}>
                                <li>سیاسی</li>
                            </a>
                        </Link>
                        <Link href="/category/story">
                            <a className={classes.story}>
                                <li>ادبیات و داستان</li>
                            </a>
                        </Link>
                        <li
                            className={classes.button}
                            onClick={() => {
                                setFlag(true);
                            }}
                        >
                            ورود
                            <CgLogIn/>
                        </li>
                        <li>
                            {user && (
                                <>
                                    <CgProfile
                                        style={{display: "inline-block"}}
                                        onClick={showDrawer}
                                    />
                                    <Drawer
                                        title={`خوش آمدید ${user} `}
                                        placement="left"
                                        onClose={onClose}
                                        visible={visible}
                                    >
                                        <Link href="/cart">
                                            <a>
                                                سبد خرید
                                                <BsCart4/>
                                            </a>
                                        </Link>
                                        <Link href='/favorites'>
                                            <a>
                                                <p> علاقه مندی ها</p>
                                            </a>
                                        </Link>
                                        <button onClick={() => authentication.logout(user)}> خروج</button>
                                    </Drawer>
                                </>
                            )}
                        </li>
                    </ul>
                </Col>
            </Row>
            {flag && (
                <>
                    <Login flag={flag}/>
                    <button className={classes.close} onClick={() => setFlag(false)}>
                        X
                    </button>
                </>
            )}
        </div>
    );
}
