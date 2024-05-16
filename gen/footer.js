import { NewNode } from "/gen/meta.js"

function Footer() {
  return NewNode("footer");
}

function LicenseLink() {
  return NewNode("a", {
    "href": "https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1",
    "target": "_blank",
    "rel": "license noopener noreferrer"
  }, "Licenced under CC BY-NC-ND 4.0")
}

export default function makeFooter() {
  let footer = Footer();
  footer.appendChild(LicenseLink());
  document.body.appendChild(footer);
}