import makeLeftBar from "/gen/leftbar.js";
import makeRightBar from "/gen/rightbar.js";

makeLeftBar();
if (!document.body.hasAttribute("no-rightbar")) {
  makeRightBar();
}