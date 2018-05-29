var _parent = document.getElementById("root");
var children = _parent.children;
for (var i = 0; i < children.length; i++) {
    var ele = children[i];
    console.log(ele.tagName);
    if (ele.tagName == "MXBUTTON") {
        var newEle = document.createElement("div");
        _parent.replaceChild(newEle, ele);
    }
}
//document.getElementById("root").appendChild(btn.getElement());
