function hover(img){
    img.src = "Logo_alter.jpeg"
}
function hoverOut(img){
    img.src = "logo.png"
}
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openbtn").style.marginLeft = "250px";
    document.getElementById("logoContainer").style.marginLeft = "250px";
    document.getElementById("openbtn").innerHTML = "&#10005;";
    document.getElementById("openbtn").setAttribute('onclick','closeNav()');
    
    
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.marginLeft = "0px";
    document.getElementById("logoContainer").style.marginLeft = "0px";
    document.getElementById("openbtn").innerHTML = "&#9776;";
    document.getElementById("openbtn").setAttribute('onclick','openNav()');
}

function IITDhomePage(){
    window.open("https://home.iitd.ac.in/")
}

