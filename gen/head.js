import { CSS, Favicon, Charset } from "/gen/meta.js";

const globalCSS = CSS("/styles/global.css");
const favicon = Favicon("/assets/favicon.ico");
const charset = Charset("utf8");

[globalCSS, favicon, charset].forEach((e) => document.head.appendChild(e));