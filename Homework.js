let aim = document.getElementById("aim");
let bullet = document.getElementById("bullet");
let gun = document.getElementById("gun");
let deg = document.getElementById("deg");
const bulletStartingX = bullet.getClientRects()[0].left;
let bulletCurrentX = bullet.getClientRects()[0].left;
let move = false;
/*let deg = document.createElement('p');
document.appendChild(deg);*/

console.log('clientWidth: ' + document.body.clientWidth + ' clientHeight: ' + document.body.clientHeight);
let clientRects = document.body.getClientRects();
console.log(clientRects);
/*for (let i = 0; i < clientRects.length; i++){
    console.log(clientRects[i]);
}*/

aim.style.top = document.body.clientHeight / 2 - 25 + 'px';
aim.style.left = document.body.clientWidth - 80 - 25 + 'px';

gun.style.top = document.body.clientHeight / 2 - 15 + 'px';

bullet.style.top = document.body.clientHeight / 2 - 13 + 'px';

function moveBullet(){
    if (move) {
        bulletCurrentX ++;
        if (bulletCurrentX >= aim.getClientRects()[0].left) {
            bulletCurrentX = bulletStartingX;
            move = false;
        }
        else {
            setTimeout(moveBullet, 50);
        }
        bullet.style.left = bulletCurrentX+'px';
    }
};

gun.addEventListener("click", function (){
    if (!move) {
        move = true;
        moveBullet();
    }
});

addEventListener("keydown", function (event){
    console.log(event.code);
    console.log(event.key);
    /*if (event.key === ' '){
        if (!move){
            move = true;
            moveBullet();
        }
    }*/
    if (event.code === 'Space'){
        if (move){
            move = false;
        }
    }
})

addEventListener("mousemove", function (event){
    let x = event.pageX;
    let y;
    if (event.pageY > document.body.clientHeight / 2){
        y = event.pageY - document.body.clientHeight / 2;
    }
    else {
        y = -(document.body.clientHeight / 2 - event.pageY);
    }
    let d = Math.atan(y / x) * (180 / Math.PI);
    gun.style.transform = 'rotate(' + d + 'deg)';
    deg.innerHTML = d + 'deg';
})


