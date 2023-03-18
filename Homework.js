let aim = document.getElementById("aim");
let bullet = document.getElementById("bullet");
let gun = document.getElementById("gun");
let deg = document.getElementById("deg");
let ytx = document.getElementById("ytx");
/*const bulletStartingX = bullet.getClientRects()[0].left;
let bulletCurrentX = bullet.getClientRects()[0].left;*/
let move = false;
let mouseDown = false;
let x;
let y;
let d;
let rad;

/*
let deg = document.createElement('p');
document.appendChild(deg);
*/

/*console.log('document.body.offsetWidth: ' + document.body.offsetWidth + ' document.body.offsetHeight: ' + document.body.offsetHeight);
console.log('document.body.clientWidth: ' + document.body.clientWidth + ' document.body.clientHeight: ' + document.body.clientHeight);*/

aim.style.top = document.body.offsetHeight / 2 - 25 + 'px';
aim.style.left = document.body.offsetWidth - 80 - 25 + 'px';

gun.style.top = (document.body.offsetHeight) / 2 - 15 + 'px';

/*console.log('gun.style.top: ' + gun.style.top)
console.log('document.body.offsetHeight/2: ' + document.body.offsetHeight/2);*/

bullet.style.top = document.body.offsetHeight / 2 - 13 + 'px';

const bulletStartingX = bullet.offsetLeft;
let bulletCurrentX = bullet.offsetLeft;
const bulletStartingY = bullet.offsetTop + bullet.offsetHeight / 2;
let bulletCurrentY = bullet.offsetTop + bullet.offsetHeight / 2;

console.log('document.body.offsetWidth: ' + document.body.offsetWidth + ' document.body.offsetHeight: ' + document.body.offsetHeight);
console.log('document.body.clientWidth: ' + document.body.clientWidth + ' document.body.clientHeight: ' + document.body.clientHeight);
console.log('document.body.offsetTop: ' + document.body.offsetTop);

function getY(rad, x){
    let result;
    let yY = Math.tan(rad) * x;
    if (yY > 0){
        result = yY + (document.body.offsetHeight + document.body.getClientRects()[0].top) / 2;
    }else {
        result = (document.body.offsetHeight + document.body.getClientRects()[0].top) / 2 + yY;
    }
    return Math.round(result);
}

function moveBullet(){
    if (move) {
        bulletCurrentX ++;
        bulletCurrentY = getY(rad, bulletCurrentX);
        console.log(getY(rad, bulletCurrentX));
        if (bulletCurrentX >= aim.offsetLeft) {
            bulletCurrentX = bulletStartingX;
            move = false;
        }
        else {
            setTimeout(moveBullet, 10);
        }
        bullet.style.left = bulletCurrentX+'px';
        bullet.style.top = bulletCurrentY - bullet.offsetHeight / 2 + 'px';
    }
}

/*addEventListener("click", function (event){
    if (!move) {
        move = true;
        moveBullet(event.pageX, event.pageY);
    }
});*/

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
    if (!move) {
        move = true;
        moveBullet();
    }
    //console.log('x: ' + x + ' y: ' + y);
});

document.body.addEventListener("mousemove", function (event){
    if (mouseDown){
        x = event.x;
        if (event.y > (document.body.offsetHeight + document.body.getClientRects()[0].top) / 2) {
            y = event.y - (document.body.offsetHeight + document.body.getClientRects()[0].top) / 2;
        } else {
            y = -((document.body.offsetHeight + document.body.getClientRects()[0].top) / 2 - event.y);
        }
        console.log(event.y);
        rad = Math.atan(y / x);
        d = Math.atan(y / x) * (180 / Math.PI);
        gun.style.transform = 'rotate(' + d + 'deg)';
        deg.innerHTML = d + 'deg';

        ytx.innerHTML = getY(Math.atan(y / x), x);
    }
});

console.log('gun.getClientRects()[0].top: ' + gun.getClientRects()[0].top);
console.log('gun.style.top: ' + gun.style.top);
console.log('gun.offsetTop: ' + gun.offsetTop);
console.log('document.body.offsetHeight/2: ' + document.body.offsetHeight/2);
console.log('document.body.getClientRects()[0].top: ' + document.body.getClientRects()[0].top);