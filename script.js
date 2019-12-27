var currentPlayer="";
var turn="";
var playerX="X";
var playerY="O";
var turn =document.getElementById("turnVal");
var visible=  document.getElementById("chioceOption");
var board= document.getElementById("board");
var boxOne = document.getElementById("boxOne");
var boxTwo = document.getElementById("boxTwo");
var boxThree= document.getElementById("boxThree");
var boxFour = document.getElementById("boxFour");
var boxFive = document.getElementById("boxFive");
var boxSix = document.getElementById("boxSix");
var boxSeven = document.getElementById("boxSeven");
var boxEight = document.getElementById("boxEight");
var boxNine = document.getElementById("boxNine");
var positionX = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var positionY=   [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var position=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
board.style.visibility="hidden";
function selectPlayer(){
  var player= document.getElementById("playerOne").value;
  if(player=="X"){
      alert("You choose player X");
      visible.style.visibility="hidden";
      currentPlayer="X";
      turn.innerHTML=currentPlayer;
      board.style.visibility="visible";
  }
  else if(player=="O"){
    alert("You choose player O");
    currentPlayer="O";
    visible.style.visibility="hidden";
    turn.innerHTML=currentPlayer;
    board.style.visibility="visible";
 }
 else{
    alert("Wrong input");
}
}
function boxOneCall(){
    if(position[0]==-1){
      if(currentPlayer==playerX){
          positionX[0]=1;
          position[0]=1;
          boxOne.value=playerX;
          currentPlayer=playerY;
          checkMoveX();
          drawn();
      }
      else{
          positionY[0]=1;
          position[0]=1;
          boxOne.value=playerY;
          currentPlayer=playerX;
          checkMoveY();
          drawn();
      }
    }
   else{
       alert("Already Filled!!");
   }
    turn.innerHTML=currentPlayer;
}
function boxTwoCall(){
    if(position[1]==-1){
        if(currentPlayer==playerX){
            positionX[1]=1;
            position[1]=1;
            boxTwo.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
              
        }
        else{
            positionY[1]=1;
            position[1]=1;
            boxTwo.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
    
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
}
function boxThreeCall(){
    if(position[2]==-1){
        if(currentPlayer==playerX){
            positionX[2]=1;
            position[2]=1;
            boxThree.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[2]=1;
            position[2]=1;
            boxThree.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
}
function boxFourCall(){
    if(position[3]==-1){
        if(currentPlayer==playerX){
            positionX[3]=1;
            position[3]=1;
            boxFour.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[3]=1;
            position[3]=1;
            boxFour.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
}

function boxFiveCall(){
    if(position[4]==-1){
        if(currentPlayer==playerX){
            positionX[4]=1;
            position[4]=1;
            boxFive.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[4]=1;
            position[4]=1;
            boxFive.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
    
}
function boxSixCall(){
    if(position[5]==-1){
        if(currentPlayer==playerX){
            positionX[5]=1;
            position[5]=1;
            boxSix.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[5]=1;
            position[5]=1;
            boxSix.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
    
}
function boxSevenCall(){
    if(position[6]==-1){
        if(currentPlayer==playerX){
            positionX[6]=1;
            position[6]=1;
            boxSeven.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[6]=1;
            position[6]=1;
            boxSeven.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
    
}
function boxEightCall(){
    if(position[7]==-1){
        if(currentPlayer==playerX){
            positionX[7]=1;
            position[7]=1;
            boxEight.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[7]=1;
            position[7]=1;
            boxEight.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
    }
function boxNineCall(){
    if(position[8]==-1){
        if(currentPlayer==playerX){
            positionX[8]=1;
            position[8]=1;
            boxNine.value=playerX;
            currentPlayer=playerY;
            checkMoveX();
            drawn();
        }
        else{
            positionY[8]=1;
            position[8]=1;
            boxNine.value=playerY;
            currentPlayer=playerX;
            checkMoveY();
            drawn();
        }
      }
      else{
          alert("Already Filled");
      }
      turn.innerHTML=currentPlayer;
    
}
function checkMoveX(){
    if((positionX[0]+positionX[1]+positionX[2])==3 || 
    (positionX[3]+positionX[4]+positionX[5])==3 ||
    (positionX[6]+positionX[7]+positionX[8])==3 ||
    (positionX[0]+positionX[4]+positionX[8])==3 ||
    (positionX[2]+positionX[4]+positionX[6])==3 ||
    (positionX[0]+positionX[3]+positionX[6])==3 ||
    (positionX[1]+positionX[4]+positionX[7])==3 ||
    (positionX[2]+positionX[5]+positionX[6])==3){
        alert("X wins!!!!");
        currentPlayer="X wins the Game";
        turn.style.color="blue";
         return 1;  
       
        console.log(positionX);
        
    }
else{
    console.log("safe to move");
}
}
function checkMoveY(){
    if((positionY[0]+positionY[1]+positionY[2])==3 || 
    (positionY[3]+positionY[4]+positionY[5])==3 ||
    (positionY[6]+positionY[7]+positionY[8])==3 ||
    (positionY[0]+positionY[4]+positionY[8])==3 ||
    (positionY[2]+positionY[4]+positionY[6])==3 ||
    (positionY[0]+positionY[3]+positionY[6])==3 ||
    (positionY[1]+positionY[4]+positionY[7])==3 ||
    (positionY[2]+positionY[5]+positionY[6])==3){
        alert("O wins!!!!")
        currentPlayer="O wins the Game";
        turn.style.color="blue";
       return 2;
        console.log(positionY);
        
    }
    else{
    console.log("safe to move");
}
}
function drawn(){
    var sum=0;
    for(var i=0;i<position.length;i++){
           sum +=position[i];
           if(sum==9){
            alert("Match Drawn game Over!!!!");
           
            return true;
            
    }
    else{
           console.log("continue");
        }
    }
    
}