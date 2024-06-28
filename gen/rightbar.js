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
 * Make a right bar with non-clickable headings.
 * @param {Object<string,Object<string,string>>} headingObj Object recording headings to link to.
 */
function makeRightBarWithSectionDividers(headingObj) {
	let rightbar = RightBar();
	Object.entries(headingObj).forEach(([section, headings]) => {
		rightbar.appendChild(Divider(section));
		if (Array.isArray(headings)) {
			headings.forEach((heading) => {
				let id = heading.replace(/\s/g, "").replace(/\//g, "-").toLowerCase();
				rightbar.appendChild(Link(id, heading));
			});
		} else {
			Object.entries(headings).forEach(([id, heading]) => {
				rightbar.appendChild(Link(id, heading));
			});
		}
		rightbar.appendChild(Divider());
	});
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
function makeRightBarWithToc() {
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

/**
 * Make a right bar, if given no object then find and use headings.
 * @param {Object<string,Object<string,string>>} obj Object recording headings to link to.
 */
export default function makeRightBar(obj = null) {
	if (obj) {
		makeRightBarWithSectionDividers(obj);
	} else {
		makeRightBarWithToc();
	}
}
