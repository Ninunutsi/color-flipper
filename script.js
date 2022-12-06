const colors = ["Green", "Red", "Blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random num between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color= colors[randomNumber]
})

// rogorc wesi math random idzleva random ricxvebs 0 dan ertamde
// tu gvinda rom areali gavzardot vamravlebt im ricxvze sadamdec gvinda rom amoigos random ricxvebi
// magram aset dros ricxvebi mteli ar iqneba da kodi amoigebs atwiladebsac
// imistvis rom amovigot mxolod mteli ricxvebi amistvis gvchirdeba math.floor
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
