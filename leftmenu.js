fetch('leftmenu.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#leftmenu");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


 function dropmenu() {
   var x = document.getElementById("mysidebar");
   if (x.className === "sidebar") {
     x.className += " responsive"; 
   } else {
     x.className = "sidebar";
   }
}

