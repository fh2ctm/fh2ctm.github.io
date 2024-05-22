/**
 * Create a new html element. 
 * @param {string} tag Type of html element. 
 * @param {(Object.<string,string>|string[])} attr Attributes the element should have. 
 * @param {string} text Inner text of the tag. 
 * @returns {HTMLElement} A new HTMLElement. 
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

/**
 * Create a new <link> to a css stylesheet. 
 * @param {string} path Path to css. 
 * @returns {HTMLElement} A <link> to the css. 
 */
export function CSS(path) {
  return NewNode("link", {
    "rel": "stylesheet",
    "href": path
  })
}

/**
 * Create a new <link> to a ico favicon file. 
 * @param {string} path Path to ico. 
 * @returns {HTMLElement} A <link> to the ico. 
 */
export function Favicon(path) {
  return NewNode("link", {
    "rel": "icon", 
    "href": path,
    "type": "image/x-icon"
  })
}

/**
 * Create a new charset <meta>.
 * @param {string} charset Desired charset. 
 * @returns {HTMLElement} A <meta> of charset. 
 */
export function Charset(charset) {
  return NewNode("meta", {
    "charset": charset
  })
}