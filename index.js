var rn1=Math.floor(Math.random()*6)+1; 
var rn2=Math.floor(Math.random()*6)+1; 

var rdi1="dice"+rn1+".png";
var rdi2="dice"+rn2+".png";
var ris1="images/"+rdi1;
var ris2="images/"+rdi2;
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",ris1);
image2.setAttribute("src",ris2);

if(rn1>rn2){

    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(rn1<rn2)
{
   
    document.querySelector("h1").innerHTML="player 2 wins"; 
}
else{
    
    document.querySelector("h1").innerHTML="draw :)";
}