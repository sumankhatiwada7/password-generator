const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateel=document.querySelector("#firstbox")
let generateel1=document.querySelector("#secondbox")
function generator(){
    let password1=''
    let password2=''
    let passwordLength = document.querySelector("#length").value;
    passwordLength = Math.max(4,  Math.min(22, passwordLength));
    for(let i=0;i<passwordLength;i++){
    password1+=characters[Math.floor(Math.random()*characters.length)]
    password2+=characters[Math.floor(Math.random()*characters.length)]
    }
   generateel.value=password1
   generateel1.value=password2
}