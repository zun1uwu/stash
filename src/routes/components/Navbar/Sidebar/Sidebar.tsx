import style from "./Sidebar.module.css";
import SideButton from "./Sidebar-btn/SideButton";

function Sidebar() {
  return (
    <>
      <div class={style.sidebar}>
        <div data-tauri-drag-region class={style.sidebar_top}>
          <h1 data-tauri-drag-region>Stash</h1>
        </div>
        <div class={style.sidebar_elements}>
          <ul class={style.wrapper}>
            <li>
              <SideButton href="/" title="Home" active={true} logoType="home" />
            </li>
            <li>
              <SideButton
                href="/entries"
                title="Entries"
                active={false}
                logoType="add"
              />
            </li>
            <li>
              <SideButton
                href="/about"
                title="About"
                active={false}
                logoType="info"
              />
            </li>
          </ul>
        </div>
        <div class={style.sidebar_bottom}>
          <a
            href="/preferences"
            class={style.settings}
            role="button"
            aria-label="Settings"
          ></a>
          <a
            href="#"
            class={style.changelog}
            role="button"
            aria-label="Changelog"
          ></a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
