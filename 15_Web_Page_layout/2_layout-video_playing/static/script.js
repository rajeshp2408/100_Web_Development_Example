var menuIcon= document.querySelector("#menu-icon");
var sideBar= document.querySelector("#sidebar-div");
var container= document.querySelector(".container");


menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

