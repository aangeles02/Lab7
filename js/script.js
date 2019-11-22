function init(){
var user_input;
var header = document.getElementById("textoutput");
var button = document.getElementById("entrybutton");

button.addEventListener("click",function(){
	
user_input = document.getElementById("entryinput").value;	
alert("Anthony Angeles: " + input);
header.innerHTML = input;
});
}






window.addEventListener('load', init);