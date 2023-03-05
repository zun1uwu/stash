/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./app";
import { Router } from "@solidjs/router";

render(() => <Router><App /></Router>, document.getElementById("root") as HTMLElement);
