import { NewNode } from "/gen/meta.js";

const rightBarSignature = NewNode(
  "a",
  {
    signature: "",
    href: "#top",
  },
  "Top of the Page",
);

/**
 * <div class="rightbar"></div>
 * @returns {Element} Right bar.
 */
function RightBar() {
  return document.querySelector("nav.right");
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
 * @param {int} level Level of heading. 
 * @returns {Element} Link.
 */
function Link(id, text, level) {
  const localPath = "#" + id;
  return NewNode(
    "a",
    {
      class: "h" + level,
      href: localPath,
    },
    text,
  );
}

/**
 * Return all headings in document body.
 * @returns {NodeListOf<Element>} A list of headings.
 */
function AllHeadings() {
  return document.body.querySelectorAll("h1[id], h2[id]");
}

/**
 * Make a right bar by listing all levels 1, 2, 3 headings with id.
 */
export default function makeRightBar() {
  let rightbar = RightBar();
  let seenH1 = false;
  const headings = AllHeadings();
  rightbar.appendChild(rightBarSignature);
  rightbar.appendChild(Divider());
  headings.forEach((heading) => {
    let doc_heading_level = heading.tagName.charAt(1);
    if (doc_heading_level === "1") {
      if (seenH1) {
        rightbar.appendChild(Divider());
      } else {
        seenH1 = true;
      }
    }
    let name = heading.id;
    let firstChar = name.charAt(0);
    if (firstChar == firstChar.toLocaleLowerCase()) { name = name.slice(1); }
    rightbar.appendChild(Link(heading.id, name, doc_heading_level));
  });
  rightbar.appendChild(Divider());
}
