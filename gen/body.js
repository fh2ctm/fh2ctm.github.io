import makeLeftBar from "/gen/leftbar.js";
import makeFooter from "/gen/footer.js";
import makeRightBar from "/gen/rightbar.js";

makeLeftBar();
if (!document.body.hasAttribute("no-rightbar")) {
    makeRightBar();
}
makeFooter();