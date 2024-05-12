const filenameToEntry = {
  "index": "About",
  "code": "Code",
  "courses-taken": "Courses Taken",
}

function makeLeftBar() {
  const leftBar = document.getElementsByClassName("leftbar")[0];
  const currentFilename = document.getElementsByTagName("title")[0].attributes["filename"].value;
  for (const [filename, entry] of Object.entries(filenameToEntry)) {
    const newLink = document.createElement("a");
    newLink.setAttribute("href", filename + ".html");
    newLink.innerHTML = entry;
    if (filename == currentFilename) {
      newLink.setAttribute("selected", "");
    }
    leftBar.appendChild(newLink);
  }
}