let gun = document.getElementById("gun");

addEventListener("mousemove", function (event){
    gun.style.transform = 'rotate(' + Math.atan(event.pageY/event.pageX) * (180 / Math.PI) + 'deg)';
    //gun.style.transform = 'rotated(' + Math.atan(event.pageY/event.pageX) * (180 / Math.PI) + 'deg';
    console.log(Math.atan(event.pageY/event.pageX) * (180 / Math.PI));
})