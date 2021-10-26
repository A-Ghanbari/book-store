import { useState } from "react";
import classes from "./Login.module.scss";
import authentication from "../../store/actions/actions";

import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Login({ setFlag, setLogin }) {
  const [data, setData] = useState(true);
  const [signupInput, setSignupInput] = useState({
    user: "",
    pass: "",
  });
  const [loginInput, setLoginInput] = useState({
    user: "",
    pass: "",
  });
  function handelSignup(e) {
    e.preventDefault();
    if (signupInput.user && signupInput.pass) {
      authentication.signup({ user: signupInput.user, pass: signupInput.pass });
      setData(!data);
    }
  }
  function handelLogin(e) {
    e.preventDefault();
    if (loginInput.user && loginInput.pass) {
      authentication.login({ user: loginInput.user, pass: loginInput.pass });
      setFlag(false);
      setLogin(false);
    }
  }
  function handleChangeInputSignUp(e) {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  }
  function handleChangeInputLogin(e) {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  }

  return (
    <div className={classes.login}>
      <AiFillCloseCircle
        className={classes.close}
        onClick={() => setFlag(false)}
      />
      <div className={classes.form}>
        {data ? (
          //-------------------- sing in ----------------
          <>
            <div className={classes.singin}>
              <h1>ورود به حساب کاربری</h1>
              <form onSubmit={handelLogin}>
                <div>
                  {/* <label htmlFor="user">نام کاربری :</label> */}
                  <input
                    type="text"
                    placeholder=" نام کاربری"
                    value={loginInput.user}
                    name="user"
                    onChange={handleChangeInputLogin}
                  />
                </div>
                <div>
                  {/* <label htmlFor="pass">رمز عبور :</label> */}
                  <input
                    type="password"
                    placeholder="رمز"
                    value={loginInput.pass}
                    name="pass"
                    onChange={handleChangeInputLogin}
                  />
                </div>

                <button type="submit" className={classes.btn}>
                  ورود
                </button>
              </form>
              <div
                className={classes.tosignup}
                onClick={() => {
                  setData(!data);
                }}
              >
                اگر عضو نیستید همین الان ثبت نام کنید{" "}
              </div>
            </div>
          </>
        ) : (
          //-----------------sing up -------------------
          <div className={classes.singup}>
            <h1> ایجاد حساب کاربری</h1>
            <form onSubmit={handelSignup}>
              <div>
                {/* <label htmlFor="user">نام کاربری :</label> */}
                <input
                  type="text"
                  placeholder="نام کاربری"
                  value={signupInput.user}
                  name="user"
                  onChange={handleChangeInputSignUp}
                />
              </div>
              <div>
                {/* <label htmlFor="pass">رمز عبور :</label> */}
                <input
                  type="password"
                  placeholder="رمز"
                  value={signupInput.pass}
                  name="pass"
                  onChange={handleChangeInputSignUp}
                />
              </div>

              <button type="submit" className={classes.btn}>
                ثبت نام
              </button>
            </form>
            <div
              className={classes.tosignin}
              onClick={() => {
                setData(!data);
              }}
            >
              اگر قبلا عضو شده اید وارد حساب خود شوید
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
