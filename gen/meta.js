/**
 * Create a new html element. 
 * @param {string} tag Type of html element. 
 * @param {(Object.<string,string>|string[])} attr Attributes the element should have. 
 * @param {string} text Inner text of the tag. 
 * @returns {Element} A new HTMLElement. 
 */
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

/**
 * Get the current filename as indicated by the 'filename' attribute of <title> in document <head>. 
 * @returns {string} Current filename. 
 */
export function CurrentFilename() {
  return document.querySelector("head title").getAttribute("filename") || ""
}
