let randMon=[
"ОРЁЛ", 
"РЕШКА"
];

function randfun(arr){
    let randName = Math.floor(Math.random() * arr.length);
						return arr[randName];
} 
let monetka = document.querySelector(".money");
let button = document.querySelector(".button");
button.addEventListener("click", function() {
  monetka.textContent=randfun(randMon);
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
      monetka.textContent="ОРЁЛ ИЛИ РЕШКА?";
      startscore=0;
      score.textContent=startscore;
      startscoree=0;
      scoree.textContent=startscoree;
});
