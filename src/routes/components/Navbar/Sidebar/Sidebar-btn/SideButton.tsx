import style from "./SideButton.module.css";
import home from "./assets/home.svg";
import add from "./assets/add.svg";
import info from "./assets/info.svg";
import socials from "./assets/socials.svg";

function SideButton(props: any) {
  return (
    <>
      <a
        href={props.href}
        class={
          props.active === true
            ? `${style.buttonAnchor} ${style.active}`
            : style.buttonAnchor
        }
        role="button"
        aria-label={props.title}
      >
        <div class={style.wrapper}>
          <img
            src={
              props.logoType === "home"
                ? home
                : props.logoType === "add"
                ? add
                : props.logoType === "info"
                ? info
                : socials
            }
            alt={props.logoType}
          />
          {props.title}
        </div>
      </a>
    </>
  );
}

export default SideButton;
