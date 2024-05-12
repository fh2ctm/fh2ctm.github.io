const pageCategory = {
  Personal: {
    index: "About",
  },
  Code: {
    code: "Code",
  },
  Academic: {
    "courses-taken": "Courses Taken",
  },
};

function makeLeftBar() {
  const leftBar = document.getElementsByClassName("leftbar")[0];
  for (const [category, pages] of Object.entries(pageCategory)) {
    const categoryHeader = document.createElement("span");
    categoryHeader.innerHTML = category;
    leftBar.appendChild(categoryHeader);
    makeLeftBarWithObject(pages);
    const divider = document.createElement("span");
    divider.innerHTML = "\u00A0";
    leftBar.appendChild(divider);
  }
}

function makeLeftBarWithObject(obj) {
  const leftBar = document.getElementsByClassName("leftbar")[0];
  const currentFilename = document.getElementsByTagName("title")[0].attributes["filename"].value;
  for (const [filename, entry] of Object.entries(obj)) {
    const newLink = document.createElement("a");
    newLink.setAttribute("href", filename + ".html");
    newLink.innerHTML = entry;
    if (filename == currentFilename) {
      newLink.setAttribute("selected", "");
    }
    leftBar.appendChild(newLink);
  }
}