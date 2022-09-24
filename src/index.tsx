import { render } from "preact";
import "./index.css";
import App from "@/router/index";

render(<App />, document.getElementById("app") as HTMLElement);
