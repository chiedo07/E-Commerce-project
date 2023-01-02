function OpenLight(){
    document.getElementById("lightbox").style.display="block";
}
function box(){
    document.getElementById("lightbox").style.display="none";
}
let slideIndex = 1;
showslides (slideIndex);
function incslide(x){
showslides(slideIndex += x);
}
function currentslide(x){
    showslides (slideIndex = x);
}
function currentslides(x){
    showslide (slideIndex = x);
}

function showslides(x){
    let i;
    let slider = document.getElementsByClassName("mySlides");
    let thumb = document.getElementsByClassName("thumn-prod");
    if (x > slider.length) {slideIndex = 1}
    if (x < 1){slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; i < thumb.length; i++){
        thumb[i].className = thumb[i].className.replace(" active","");}
     slider[slideIndex-1].style.display = "block";
     thumb[slideIndex-1].className += "active";
};
// lightbox function
function showslide(x){
    let i;
    let slider = document.getElementsByClassName("mySlide");
    let thumb = document.getElementsByClassName("thumn-prod");
    if (x > slider.length) {slideIndex = 1}
    if (x < 1){slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; i < thumb.length; i++){
        thumb[i].className = thumb[i].className.replace(" active","");}
     slider[slideIndex-1].style.display = "block";
     thumb[slideIndex-1].className += "active";
};





