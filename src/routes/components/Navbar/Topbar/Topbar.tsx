import { createSignal } from "solid-js";
import { appWindow } from "@tauri-apps/api/window";
import style from "./Topbar.module.css";
import search from "./assets/search.svg";
import close from "./assets/close.svg";
import minimize from "./assets/minimize.svg";

function Topbar() {
  const [seachQuery, setSearchQuery] = createSignal("");

  return (
    <>
      <div data-tauri-drag-region class={style.topbar}>
        <div class={style.searchBar}>
          <input
            type="text"
            placeholder="Search entire database"
            onInput={(e) => {
              setSearchQuery(e.currentTarget.value);
            }}
          />
          <button>
            <img src={search} alt="Search Bar Icon" />
          </button>
        </div>
        <div class={style.interactionBtn}>
          <button onClick={() => appWindow.minimize()} class={style.minimize}>
            <img src={minimize} alt="Minimize Window Icon" />
          </button>
          <button onClick={() => appWindow.close()} class={style.close}>
            <img src={close} alt="Close Window Icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Topbar;
