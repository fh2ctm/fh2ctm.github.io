// create a new html tag with attr (indicated as obj) and inner text
export function NewNode(tag="badtag", attr=null, text="") {
  let newNode = document.createElement(tag);
  if (attr) {
    if (Array.isArray(attr)) {
      attr.entries().forEach((attrKey) => {
        newNode.setAttribute(attrKey, "");
      })
    } else {
      Object.entries(attr).forEach(([attrKey, attrStr]) => {
        newNode.setAttribute(attrKey, attrStr);
      })
    }
  }
  newNode.innerText = text;
  return newNode;
}

export function CurrentFilename() {
  return document.querySelector("head title").getAttribute("filename") || ""
}