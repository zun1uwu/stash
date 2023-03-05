import { Route, Routes } from '@solidjs/router';
import { appWindow } from '@tauri-apps/api/window'

import home from './routes/home';
import files from './routes/categories/files';
import images from './routes/categories/images';
import music from './routes/categories/music';
import passwords from './routes/categories/passwords';
import text from './routes/categories/text';
import videos from './routes/categories/videos';
import preferences from './routes/meta/preferences';
import about from './routes/meta/about';
import new_entry from './routes/entry';

import "./app.css";

function App() {

  function minimize() {
    appWindow.minimize();
  }

  function close() {
    appWindow.close();
  }

  return <>
    <div data-tauri-drag-region class="titlebar">
      <div class="titlebar-text">
        <h3>stash</h3>
        <a href='/'>home</a>
        <a href='/preferences'>preferences</a>
        <a href='/about'>about</a>
      </div>
      <div class="titlebar-button" id="titlebar-minimize">
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
          onClick={() => minimize()}
        />
      </div>
      <div class="titlebar-button" id="titlebar-close">
        <img
          src="https://api.iconify.design/mdi:close.svg"
          alt="close"
          onClick={() => close()}
        />
      </div>
    </div>
    <div class="container">
      <Routes>
        <Route path="/" component={home} />
        <Route path="/preferences" component={preferences} />
        <Route path="/about" component={about} />
        <Route path="/new-entry" component={new_entry} />
        <Route path="/passwords" component={passwords} />
        <Route path="/videos" component={videos} />
        <Route path="/images" component={images} />
        <Route path="/music" component={music} />
        <Route path="/files" component={files} />
        <Route path="/text" component={text} />
      </Routes>
    </div>
  </>
}

export default App;