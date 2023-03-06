import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav class={style.nav}>
        <Sidebar />
        <Topbar />
      </nav>
    </>
  );
}

export default Navbar;
