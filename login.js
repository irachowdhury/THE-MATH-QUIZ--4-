function addUser() 
{

player1 = document.getElementById("player1_name_input").value;
player2 = document.getElementById("player2_name_input").value;

window.localStorage.setItem("player1", player1);
window.localStorage.setItem("player2", player2);

window.location = "game.html" ;

}