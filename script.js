let arr = ["PONDICHERRY","DELHI","BANGALORE","HYDERABAD","SURAT"];
let num = Math.floor(Math.random()*5);
let word = arr[num];
let chance = 0;
let blankFilled = 0;
let blanks = document.getElementById("blank");
let cells = document.getElementsByClassName("cell");
document.addEventListener("DOMContentLoaded", function(){
  for(let i=0; i< word.length; i++){
    let cell = document.createElement('div');
    cell.classList.add("cell");
    blanks.appendChild(cell);

  }
  for(let i=0;i<26;i++){
    let button = document.createElement("button");
    let keys = String.fromCharCode(65+i);
    button.innerHTML = keys;
    button.setAttribute("id", `${keys}`);
    button.setAttribute("onclick", "letterClick(this)");
      button.classList.add("alphabets");
    document.getElementsByClassName("keywords")[0].appendChild(button);
  }
});

function letterClick(el){
  let id = el.id;
  // console.log(id);
  let letterFound = false;
  for(let i=0; i< word.length; i++){
    if(id === word[i]){
      cells[i].innerHTML = id;
      letterFound = true;
      blankFilled++;
    }
  }
  if(!letterFound){
    // let liveel = 5-chance;
    let hangmanImg = document.getElementById("hangman");
    let lifeLeft = document.getElementsByClassName("chanceLeft");
    lifeLeft[chance].classList.add("hide");
    chance++;
    hangmanImg.src=`images/${chance}.jpg`;

  }
  if(isWinner()){
    // alert("jeet gaya bhau");
    document.getElementById("result-pic").setAttribute("src","https://media.giphy.com/media/26BkNituin1dca6GI/giphy.gif");
    for(let i=0; i< 26; i++){
      let alp = document.getElementsByClassName("alphabets");
      alp[i].setAttribute("onclick", "");
    }
  }
  if(chance === 5){
    // alert("game over");
    document.getElementById("result-pic").setAttribute("src","https://media.giphy.com/media/lpsjyUFYMa5i8dao22/giphy.gif");
    for(let i=0; i< 26; i++){
      let alp = document.getElementsByClassName("alphabets");
      alp[i].setAttribute("onclick", "");
    }
    document.getElementById("chance0").innerHTML += 0;
  }
}

function isWinner(){
  if(blankFilled === word.length){
    return true;
  }
  return false;
}
