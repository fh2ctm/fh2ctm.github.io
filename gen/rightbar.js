import { NewNode } from '/gen/meta.js';

/* <div class="leftbar"></div> */
function RightBar() {
  return NewNode("div", {
    "class": "rightbar"
  })
}

/* <span divider>&nbsp;</span> */
function Divider(text = "\u00A0") {
  return NewNode("span", {}, text);
}

/* <a href="#id">text</a> */
function Link(id, text) {
  let localPath = "#" + id;
  return NewNode("a", {
    "href": localPath
  }, text)
}

export default function makeRightBar(headingObj) {
  let rightbar = RightBar();
  Object.entries(headingObj).forEach(([section, headings]) => {
    rightbar.appendChild(Divider(section));
    if (Array.isArray(headings)) {
      headings.forEach((heading) => {
        let id = heading
          .replace(/\s/g, "")
          .replace(/\//g, "-")
          .toLowerCase();
        rightbar.appendChild(Link(id, heading));
      })
    } else {
      Object.entries(headings).forEach(([id, heading]) => {
        rightbar.appendChild(Link(id, heading));
      });
    }
    rightbar.appendChild(Divider());
  })
  document.body.appendChild(rightbar);
}