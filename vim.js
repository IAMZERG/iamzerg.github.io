function displayContactForm() {
		document.getElementById("contact-form").style.display = "block";
		document.querySelector(".resume").style.width = "50%";
		window.scroll(0,0);
}



if (!window.matchMedia("(print)").matches) {
	var vimTags = document.querySelectorAll(".vim");
	
	console.log(vimTags);
	for(var i=0; i < vimTags.length; i++) {
			vimTags[i].innerHTML = vimTags[i].innerHTML.replace("let", "<span class='code'>let</span>");
	}
	
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

var formLinks = document.querySelectorAll(".form-link");

for(var j=0; j < formLinks.length; j++) {
	formLinks[j].addEventListener("click", function (event) {
    displayContactForm();
	});
}


  



