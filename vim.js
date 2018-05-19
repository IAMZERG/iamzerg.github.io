
if(!window.matchMedia("(print)").matches) {
	let vimTags = document.querySelectorAll(".vim");
	vimTags.forEach(function (tag) {
			tag.innerHTML = tag.innerHTML.replace("let", "<span class='code'>let</span>");
	});
}

document.addEventListener("keydown", function(event) {
  var cmdInput = document.querySelector(".cmd");
  if(event.shiftKey && event.keyCode == 186) {
    cmdInput.focus();
  } 
});

document.querySelector("#cmd").onsubmit = function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  event.target.reset();
  event.target.childNodes[0].blur();

  if (formData.get('cmd') == ":q" || formData.get('cmd') == ":wq") {
    
    window.location.assign("desktop.html");
    console.log("switching to desktop");
  }

};

document.querySelectorAll(".form-link").forEach(function(item) {
	item.addEventListener("click", function (event) {
		document.getElementById("contact-form").style.display = "block";
		document.querySelector(".resume").style.width = "50%";
		window.scroll(0,0);
	});
});

console.log("Hello!");




