import Logo from "../images/ironhack-logo-xs.png";
import Menu from "../images/menu-top-xs.png";
import style from "./style.module.css";

export function TopDiv() {
  const altLogo = "Logo";
  const altMenu = "Menu";

  return (
    <div className={style.divSuperior}>
      <img src={Logo} alt={altLogo} />
      <img src={Menu} alt={altMenu} className={style.leftImage} />

      <h1 className={style.title}>Say hello to ReactJS</h1>
      <p className={style.text}>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button className={style.button}>Awesome!</button>
    </div>
  );
}
