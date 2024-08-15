/**
 * Create a new html element.
 * @param {string} tag Type of html element.
 * @param {(Object<string,string>|string[])} attr Attributes the element should have.
 * @param {string} text Inner text of the tag.
 * @returns {Element} A new HTMLElement.
 */
function NewNode(tag = "badtag", attr = null, text = "") {
	let newNode = document.createElement(tag);
	if (attr) {
		if (Array.isArray(attr)) {
			attr.entries().forEach((attrKey) => {
				newNode.setAttribute(attrKey, "");
			});
		} else {
			Object.entries(attr).forEach(([attrKey, attrStr]) => {
				newNode.setAttribute(attrKey, attrStr);
			});
		}
	}
	newNode.innerText = text;
	return newNode;
}

/**
 * Layout of the page structure. 
 */
const pageCategory = {
	"Academic": {
		"courses-taken": "Courses Taken",
		"research": "Research",
	},
	"Fun": {
		"blog": "Blog",
	},
	"Language": {
		"cn-ime": "Chinese IME",
		"qeerty": "QÉERTY Keyboard",
	},
};

/**
 * <span divider>&nbsp;</span>
 * @param {string} text Inner text.
 * @returns {Element} Divider.
 */
function Divider(text = "\u00A0") {
	return NewNode("span", null, text);
}

// make a leftbar

let filename = document.querySelector("head title").getAttribute("filename") || "";
let leftBar = document.querySelector("nav.left");
leftBar.appendChild(NewNode(
	"a",
	{
		signature: "",
		href: "/index.html",
	},
	"Rex Fang",
));
leftBar.appendChild(Divider());
Object.entries(pageCategory).forEach(([category, pages]) => {
	leftBar.appendChild(Divider(category));
	Object.entries(pages).forEach(([title, page]) => {
		let pageDir = "/" + category.toLowerCase() + "/" + title + ".html";
		let link = NewNode("a", { href: pageDir }, page);
		if (filename == title) link.setAttribute("selected", "");
		leftBar.appendChild(link);
	});
	leftBar.appendChild(Divider());
});

// Make a right bar by listing all levels 1, 2, 3 headings with id.

if (document.querySelector("nav.right")) {
	let rightbar = document.querySelector("nav.right");
	rightbar.appendChild(NewNode(
		"a",
		{
			signature: "",
			href: "#top",
		},
		"Go Top",
	));
	rightbar.appendChild(Divider());
	let seenH1 = false;
	document.body.querySelectorAll("h1[id], h2[id]").forEach((heading) => {
		let hDepth = heading.tagName.charAt(1);
		if (hDepth === "1") {
			if (seenH1) {
				rightbar.appendChild(Divider());
			} else {
				seenH1 = true;
			}
		}
		let label = heading.getAttribute("label");
		rightbar.appendChild(NewNode(
			"a",
			{
				class: "h" + hDepth,
				href: "#" + heading.id,
			},
			label ? label : heading.innerText,
		));
	});
	rightbar.appendChild(Divider());
}
