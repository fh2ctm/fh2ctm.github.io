import { NewNode } from "/gen/meta.js";
import pageCategory from "/gen/site-dir.js"

/* <a signature href="index.html">◊ Rex's Website</a> */
function LeftBarSignature() {
  return NewNode("a", {
    "signature": "", 
    "href": "/index.html"
  }, "◊ Rex's Website");
}

/* <span divider>&nbsp;</span> */
function Divider(text="\u00A0") {
  return NewNode("span", {}, text);
}

/* <div class="leftbar"></div> */
function LeftBar() {
  return NewNode("div", {
    "class": "leftbar"
  })
}

/* <a href=path>text</a> */
function Link(path, text) {
  return NewNode("a", {
    "href": path
  }, text)
}

export default function makeLeftBar() {
  let leftBar = LeftBar();
  leftBar.appendChild(LeftBarSignature());
  leftBar.appendChild(Divider());
  Object.entries(pageCategory).forEach(([category, pages]) => {
    leftBar.appendChild(Divider(category));
    Object.entries(pages).forEach(([title, page]) => {
      leftBar.appendChild(
        Link("/pages/" + category.toLowerCase() + "/" + title + ".html", page)
      );
    });
    leftBar.appendChild(Divider());
  });
  let doc = document.querySelector(".document");
  document.body.insertBefore(leftBar, doc);
}