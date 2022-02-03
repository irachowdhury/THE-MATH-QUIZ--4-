function send()
{

  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;

  actual_answer = parseInt(number1) * parseInt(number2);
  question_number = "<h4>" +number1 + "x" + number2 + "</h4>";

  input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
  check_button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_number + input_box + check_button;

  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";


}

question_turn = "player1";
Answer_turn = "player2";

function check()
{

 get_answer = document.getElementById("input_check_box").value;
 answer = get_answer.toLowerCase();
 console.log("Answer In Lower case - " + answer);
 if(answer == actual_answer){
     if( Answer_turn == "player1"){
        player1_score = player1_score + 1;
        update_score();
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else{
        player2_score = player2_score + 1;
        update_score();
        document.getElementById("player2_score").innerHTML = player2_score;

    }

  }
  else{
      if(Answer_turn =="player1"){
          player1_score = player1_score - 1;
          player2_score = player2_score + 1;
          update_score();
          document.getElementById("player1_score").innerHTML = player1_score;
          document.getElementById("player2_score").innerHTML = player2_score;
      }

  }
  if(question_turn == "player1"){
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
  }
  else{
      question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
  }
  if(Answer_turn == "player1"){
      Answer_turn = "player2";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
  }
  else{
      Answer_turn = "player1";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
  }
  document.getElementById("output").innerHTML = "";

}
function update_score() {
    localStorage.setItem("player1_score", player1_score);
    localStorage.setItem("player2_score", player2_score);

}