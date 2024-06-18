// Change tabs for About Me

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function open_tab(tabName){
    for (tabLink of tabLinks){
    tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents){
    tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}