function openTab(tabName) {
    let i, tabContent, tabButtons;

    tabContent = document.getElementsByClassName("content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.opacity = "0";
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    setTimeout(function () {
        document.getElementById(tabName).style.opacity = "1";
    }, 10); 
    event.currentTarget.classList.add("active");
}

document.getElementById("Bitcoin").style.display = "block";
document.getElementById("Bitcoin").style.opacity = "1";