import { NewNode, CurrentFilename } from "/gen/meta.js";
import pageCategory from "/data/site-dir.js";

const leftBarSignature = NewNode(
  "a",
  {
    signature: "",
    href: "/index.html",
  },
  "Rex Fang",
);

/**
 * <span divider>&nbsp;</span>
 * @param {string} text Inner text.
 * @returns {Element} Divider.
 */
function Divider(text = "\u00A0") {
  return NewNode("span", {}, text);
}

/**
 * <div class="leftbar"></div>
 * @returns {Element} Left bar.
 */
function LeftBar() {
  return document.querySelector(".leftbar");
}

/**
 * <a href=path>text</a>
 * @param {string} path Path to page.
 * @param {string} text Inner text.
 * @param {boolean} selected If current page is selected.
 * @returns {Element} Link.
 */
function Link(path, text, selected = false) {
  let link = NewNode("a", { href: path }, text);
  selected && link.setAttribute("selected", "");
  return link;
}

/**
 * Make a left bar.
 */
export default function makeLeftBar() {
  let filename = CurrentFilename();
  let leftBar = LeftBar();
  // add left bar signature
  leftBar.appendChild(leftBarSignature);
  // add divider
  leftBar.appendChild(Divider());
  // iterate category
  Object.entries(pageCategory).forEach(([category, pages]) => {
    leftBar.appendChild(Divider(category));
    // iterate page
    Object.entries(pages).forEach(([title, page]) => {
      let pageDir = "/pages/" + category.toLowerCase() + "/" + title + ".html";
      leftBar.appendChild(Link(pageDir, page, filename == title));
    });
    leftBar.appendChild(Divider());
  });
}
