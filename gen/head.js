import { NewNode } from "/gen/meta.js"

/*
  Reference:
  <link rel="stylesheet" href="/styles/global.css"/>
  <link rel="icon" href="/assets/favicon.ico" type="image/x-icon"/>
  <meta charset="utf8"/>
  <title>Rex's Website</title>
 */

function Stylesheet(dir) {
  return NewNode("link", {
    "rel": "stylesheet", 
    "href": dir
  });
}

function Favicon(dir) {
  return NewNode("link", {
    "rel": "icon", 
    "href": dir, 
    "type": "image/x-icon"
  });
}

function Charset(charset) {
  return NewNode("meta", {
    "charset": charset
  })
}

export default function makeHead() {
  let head = document.head;
  head.appendChild(Stylesheet("/styles/global.css"));
  head.appendChild(Favicon("/assets/favicon.ico"));
  head.appendChild(Charset("utf8"));
}