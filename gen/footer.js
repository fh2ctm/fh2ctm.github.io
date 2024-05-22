import { NewNode } from "/gen/meta.js"

const footer = NewNode("footer");

const licenseLink = NewNode("a", {
    "href": "https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1",
    "target": "_blank",
    "rel": "license noopener noreferrer"
  }, "Licenced under CC BY-NC-ND 4.0");

export default function makeFooter() {
  footer.appendChild(licenseLink);
  document.body.appendChild(footer);
}