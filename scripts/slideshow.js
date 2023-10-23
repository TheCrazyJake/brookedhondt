let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
showSlides();

function showSlides() {
    let i;
    let e;
    let u;

    let slides1 = document.getElementsByClassName("proslides");
    let slides2 = document.getElementsByClassName("perslides");
    let slides3 = document.getElementsByClassName("clientslides");

    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
    slides1[slideIndex1-1].style.display = "block";  

    for (e = 0; e < slides2.length; e++) {
        slides2[e].style.display = "none";  
      }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
    slides2[slideIndex2-1].style.display = "block";  

    for (u = 0; u < slides3.length; u++) {
      slides3[u].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
    slides3[slideIndex3-1].style.display = "block";  

    setTimeout(showSlides, 4000); // Change image every 2 seconds
}