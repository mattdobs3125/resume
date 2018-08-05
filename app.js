var dinoOne =  {
    levels:[
        "base",
        "moderatlely hurt",
        "Enraged",
        "Dead"
    ],
    levelImages:[
     'a.jpg'
        
    ],
    title:"tRex",
    health : 100,
    armorStatus : 140,
level:"base",

}
const dinoTwo =  {
    levels:[
        "base",
        "moderatlely hurt",
        "Enraged",
        "Dead"
    ],
    levelImages:[
        
    ],
    title:"carno",
health : 120,
armorStatus : 90,
level:"base",

}   
const title = document.getElementById('title')
const kick = document.getElementById('kick-button')
const punchs = document.getElementById('punch-button')
const block = document.getElementById('sheild-button')
const healh = document.getElementById('health')
const armorStatus = document.getElementById('status')
const encounterImg = document.getElementById('encounter-img')


function encounterStart(){

title.innerText = dinoOne.title
armorStatus.innerText = dinoOne.armorStatus.toString()
health.innerText = dinoOne.health.toString()
if (dinoOne.health ===0){
    punch.disabled = true;
    kick.disabled = true;
    block.disabled = true;

}
}
function punch(){
dinoOne.health --;
if (dinoOne.health===0){
    dinoOne.levelImages = 
}
    encounterStart();
}