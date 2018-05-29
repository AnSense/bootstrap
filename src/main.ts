

let _parent:HTMLElement=document.getElementById("root");
var children=_parent.children;
for(var i=0;i<children.length;i++){
    let ele:Element=children[i];
    console.log(ele.tagName);
    if(ele.tagName=="MXBUTTON"){
        let newEle:Element=document.createElement("div");
        _parent.replaceChild(newEle,ele);
    }
}
//document.getElementById("root").appendChild(btn.getElement());