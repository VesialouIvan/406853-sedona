var link = document.querySelector(".search-btn");
var popup = document.querySelector(".form-index"); 
var dayIn = popup.querySelector("[name=date-in]"); 
popup.classList.add("form-index"), 
link.addEventListener("click", function(a) { 
	a.preventDefault(), 
	popup.classList.toggle("form-index-show"), 
	dayIn.focus() 
});