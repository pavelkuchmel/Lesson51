let aim = document.getElementById("aim");
let bullet = document.getElementById("bullet");
let gun = document.getElementById("gun");
let deg = document.getElementById("deg");
const bulletStartingX = bullet.getClientRects()[0].left;
let bulletCurrentX = bullet.getClientRects()[0].left;
let move = false;
let mouseDown = false;

/*
let deg = document.createElement('p');
document.appendChild(deg);
*/

console.log('clientWidth: ' + document.body.clientWidth + ' clientHeight: ' + document.body.clientHeight);
console.log('offsetWidth: ' + document.body.offsetWidth + ' clientHeight: ' + document.body.offsetHeight);
let clientRects = document.body.getClientRects();
console.log(clientRects);

aim.style.top = document.body.offsetHeight / 2 - 25 + 'px';
aim.style.left = document.body.offsetWidth - 80 - 25 + 'px';

gun.style.top = document.body.offsetHeight / 2 - 15 + 'px';

bullet.style.top = document.body.offsetHeight / 2 - 13 + 'px';

function moveBullet(mouseX, mouseY){
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

addEventListener("click", function (event){
    if (!move) {
        move = true;
        moveBullet(event.pageX, event.pageY);
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
});

addEventListener('mousedown', function (){
    mouseDown = true;
});

addEventListener('mouseup', function (){
    mouseDown = false;
});

document.body.addEventListener("mousemove", function (event){
    if (mouseDown){
        let x = event.pageX;
        let y;
        if (event.pageY > document.body.offsetHeight / 2) {
            y = event.pageY - document.body.offsetHeight / 2;
        } else {
            y = -(document.body.clientHeight / 2 - event.pageY);
        }
        console.log(event.pageY);
        /*if (x > Math.abs(y)) {
            console.log(x / y);
        } else {
            console.log(y / x);
        }*/
        let d = Math.atan(y / x) * (180 / Math.PI);
        gun.style.transform = 'rotate(' + d + 'deg)';
        deg.innerHTML = d + 'deg';
    }
});





