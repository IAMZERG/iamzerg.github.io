
document.addEventListener("keydown", function(event) {
  console.log(event.keyCode);
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

  console.log(formData.get("cmd"));

};




if(!window.matchMedia("(print)").matches) {
	let vimTags = document.querySelectorAll(".vim");
	vimTags.forEach(function (tag) {
		console.log(tag.innerHTML);
			tag.innerHTML=tag.innerHTML.replace("let", "<span class='code'>let</span>");
	});
}



