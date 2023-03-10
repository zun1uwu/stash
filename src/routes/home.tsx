import local from "./home.module.css";
import minimize from "./assets/minimize.svg";
import close from "./assets/close.svg";
import { appWindow } from "@tauri-apps/api/window";

function Home() {
  return (
    <>
      <div data-tauri-drag-region class={local.topbar}>
        <div class={local.interactionBtn}>
          <button onClick={() => appWindow.minimize()} class={local.minimize}>
            <img src={minimize} alt="Minimize Window Icon" />
          </button>
          <button onClick={() => appWindow.close()} class={local.close}>
            <img src={close} alt="Close Window Icon" />
          </button>
        </div>
        <main>
          <h1>Home</h1>
        </main>
      </div>
    </>
  );
}

export default Home;
