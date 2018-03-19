
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

document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  event.target.reset();
  event.target.childNodes[0].blur();

  alert(window.location);

  window.location.assign("desktop.html");
  if (formData.get('cmd') == ":q" || formData.get('cmd') == ":wq") {
    
    window.location.assign("desktop.html");
    console.log("switching to desktop");
  }

};





