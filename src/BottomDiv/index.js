import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";
import style from "./style.module.css";

export function BottomDiv() {
  const altIcon1 = "Icon1";
  const altIcon2 = "Icon2";
  const altIcon3 = "Icon3";
  const altIcon4 = "Icon4";

  return (
    <div className={style.bottomDiv}>
      <div className={style.smallDiv}>
        <img src={Icon1} alt={altIcon1} />
        <h2 className={style.title}>Declarative</h2>
        <p className={style.text}>
          React makes it painless to create interactive UIs.
        </p>
      </div>
      <div className={style.smallDiv}>
        <img src={Icon2} alt={altIcon2} />
        <h2 className={style.title}>Components</h2>
        <p className={style.text}>
          Build encapsulated components that manage their state.
        </p>
      </div>
      <div className={style.smallDiv}>
        <img src={Icon3} alt={altIcon3} />
        <h2 className={style.title}>Single-Way</h2>
        <p className={style.text}>
          A set of immutable values are passed to the component's.
        </p>
      </div>
      <div className={style.smallDiv}>
        <img src={Icon4} alt={altIcon4} />
        <h2 className={style.title}>JSX</h2>
        <p className={style.text}>
          Statically typed, designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}
