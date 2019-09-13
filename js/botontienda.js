//Get the button:
mybutton = document.getElementById("fixedbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 3500) {
        mybutton.style.display = "none";
    }
}