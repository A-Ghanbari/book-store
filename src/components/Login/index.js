import { useState } from "react";
import classes from "./Login.module.scss";

export default function Login({ flag }) {
  const [data, setData] = useState(true);
  const [formState, setFormState] = useState({
    user: "",
    pass: "",
  });

  function handelSubmit(e) {
    e.preventDefault();
  }
  function handleChangeInput(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div className={classes.login}>
      <div className={classes.form}>
        {data ? (
          //-------------------- sing in ----------------
          <div className={classes.singin}>
            <h1>ورود به حساب کاربری</h1>
            <form onSubmit={handelSubmit}>
              <div>
                <label htmlFor="user">نام کاربری :</label>
                <input
                  type="text"
                  placeholder=" نام کاربری"
                  value={formState.user}
                  name="user"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <label htmlFor="pass">رمز عبور :</label>
                <input
                  type="password"
                  placeholder="رمز"
                  value={formState.pass}
                  name="pass"
                  onChange={handleChangeInput}
                />
              </div>

              <button type="submit">ورود</button>
              <div>
                <button
                  style={{ marginTop: 30 }}
                  onClick={() => {
                    setData(!data);
                  }}
                >
                  اگر عضو نیستید همین الان ثبت نام کنید{" "}
                </button>
              </div>
            </form>
          </div>
        ) : (
          //-----------------sing up -------------------
          <div className={classes.singup}>
            <h1> ایجاد حساب کاربری</h1>
            <form onSubmit={handelSubmit}>
              <div>
                <label htmlFor="user">نام کاربری :</label>
                <input
                  type="text"
                  placeholder="نام کاربری"
                  value={formState.user}
                  name="user"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <label htmlFor="pass">رمز عبور :</label>
                <input
                  type="password"
                  placeholder="رمز"
                  value={formState.pass}
                  name="pass"
                  onChange={handleChangeInput}
                />
              </div>

              <button type="submit">ثبت نام</button>

              <div>
                <button
                  style={{ marginTop: 30 }}
                  onClick={() => {
                    setData(!data);
                  }}
                >
                  اگر قبلا عضو شده اید وارد حساب خود شوید
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
