$(document).ready(function () {
    const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgFirst = document.getElementById("imgFirst");
const imgSecond = document.getElementById("imgSecond");
const imgThird = document.getElementById("imgThird");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const arrayImg = [imgFirst,imgSecond,imgThird];
arrayImg.forEach(elem => elem.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
  });
  