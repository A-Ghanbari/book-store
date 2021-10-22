import classes from "./Sider.module.scss";

export default function Sider() {
  return (
    <div className={classes.sider}>
      <ul>
        <li>تاریخی</li>
        <li>سیاسی</li>
        <li>ادبیات و داستان</li>
      </ul>
    </div>
  );
}
