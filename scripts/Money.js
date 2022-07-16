let randMon=[
{engl: "HEADS", rusl: "(орёл)"},
{engl: "TAILS", rusl: "(решка)"}
];

function randfun(arr){
    let randName = Math.floor(Math.random() * arr.length);
		return arr[randName];               
} 


let monetka = document.querySelector(".money");
let rusw = document.querySelector(".rusw");
let button = document.querySelector(".button");



button.addEventListener("click", function() {
  
  let randmonet = randfun(randMon);
  monetka.textContent=randmonet.engl;
  rusw.textContent=randmonet.rusl;
  
});

  
let score=document.querySelector(".score");
let buton=document.querySelector(".buton");
let startscore=0;
buton.addEventListener("click", function (){
    startscore=startscore+1;
    score.textContent=startscore;   
});

let scoree=document.querySelector(".scoree");
let butonn=document.querySelector(".butonn");
let startscoree=0;
butonn.addEventListener("click", function (){
    startscoree=startscoree+1;
    scoree.textContent=startscoree;   
});

let buttontwo = document.querySelector(".buttontwo");
let restart = document.querySelector(".restart");

buttontwo.addEventListener("click", function(){
      monetka.textContent="HEADS or TAILS?";
      rusw.textContent="(орёл или решка?)"
      startscore=0;
      score.textContent=startscore;
      startscoree=0;
      scoree.textContent=startscoree;
});
