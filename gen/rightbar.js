import { NewNode } from "/gen/meta.js";

/**
 * <div class="rightbar"></div>
 * @returns {Element} Right bar.
 */
function RightBar() {
  return document.querySelector(".rightbar");
}

/**
 * <span divider>&nbsp;</span>
 * @param {string} text Inner text.
 * @returns {Element} Divider.
 */
function Divider(text = "\u00A0") {
  return NewNode("span", {}, text);
}

/**
 * <a href="#id">text</a>
 * @param {string} id Heading ID to link to.
 * @param {*} text Inner text.
 * @param {boolean} h1 Whether this is an <h1> heading.
 * @returns {Element} Link.
 */
function Link(id, text, h1 = false) {
  const localPath = "#" + id;
  if (h1) {
    return NewNode(
      "a",
      {
        href: localPath,
        class: "h1",
      },
      text,
    );
  } else {
    return NewNode(
      "a",
      {
        href: localPath,
      },
      text,
    );
  }
}

/**
 * Return all headings in document body.
 * @returns {NodeListOf<Element>} A list of headings.
 */
function AllHeadings() {
  return document.body.querySelectorAll("h1[id], h2[id]");
}

/**
 * Make a right bar by listing all <h1> and <h2> headings with id.
 */
export default function makeRightBar() {
  let rightbar = RightBar();
  let seenH1 = false;
  const headings = AllHeadings();
  headings.forEach((heading) => {
    let isH1 = (heading.tagName.toLowerCase() == "h1");
    if (isH1) {
      if (seenH1) {
        rightbar.appendChild(Divider());
      } else {
        seenH1 = true;
      }
    }
    rightbar.appendChild(Link(heading.id, heading.id, isH1));
  });
  rightbar.appendChild(Divider());
}
