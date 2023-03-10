import { Route, Routes } from "@solidjs/router";
import home from "./routes/home";
import files from "./routes/categories/files";
import images from "./routes/categories/images";
import music from "./routes/categories/music";
import passwords from "./routes/categories/passwords";
import text from "./routes/categories/text";
import videos from "./routes/categories/videos";
import preferences from "./routes/meta/preferences";
import about from "./routes/meta/about";
import entries from "./routes/entries";

import "./app.css";
import Sidebar from "./routes/components/Navbar/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div class="page">
        <Sidebar />
        <Routes>
          <Route path="/" component={home} />
          <Route path="/preferences" component={preferences} />
          <Route path="/about" component={about} />
          <Route path="/entries" component={entries} />
          <Route path="/passwords" component={passwords} />
          <Route path="/videos" component={videos} />
          <Route path="/images" component={images} />
          <Route path="/music" component={music} />
          <Route path="/files" component={files} />
          <Route path="/text" component={text} />
        </Routes>
      </div>
    </>
  );
}

export default App;
