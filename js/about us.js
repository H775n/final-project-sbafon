document.getElementById("showbutton").addEventListener("click", function() {   
    document.getElementById("showsection").style.display = "block";

}); 


document.getElementById("Submitform").addEventListener("submit", function(event) {
event.preventDefault();

document.getElementById("Submitform").style.display ="none";
alert("Thanks for the communication.");


});

