/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
} 


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let nav = document.querySelector("nav");
window.onscroll = function() {
    if(window.scrollY > 100){
        nav.classList.add("bg-nav");
    } else {
        nav.classList.remove("bg-nav");
    }  
}
