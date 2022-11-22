
var modal = document.getElementById("myModal");
console.log("hjcjxjlvjlkj");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var captionText = document.getElementById("caption");
 function openModel(test){
        console.log("test");
        modal.style.display = "block";
	title.innerHTML = test;
        captionText.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}