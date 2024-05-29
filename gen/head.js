import { NewNode } from "/gen/meta.js";

const globalCSS = NewNode("link", {
    rel: "stylesheet",
    href: "/styles/global.css",
});

const favicon = NewNode("link", {
    rel: "icon",
    href: "/assets/favicon.ico",
    type: "image/x-icon",
});

const charset = NewNode("meta", {
    charset: "utf8",
});

[globalCSS, favicon, charset].forEach((e) => document.head.appendChild(e));
