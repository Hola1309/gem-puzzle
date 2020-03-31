var arr;
function myArr(){
    
    
}
myArr()
const c = document.getElementById("canvas");
const span = document.getElementById("span");
const ok = document.getElementById("ok");
const difficult = document.getElementById('difficult');
const ctx = c.getContext("2d");

var fill, empty, rectSize, rectPushX = 0,
    rectPushY = 0;

function filled() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(rectPushX, rectPushY, rectSize, rectSize);
    ctx.rect(rectPushX, rectPushY, rectSize, rectSize);
    ctx.stroke();
}



ok.addEventListener('click', () => {
    
    arrlength = +difficult.value;
    
   
    arr = [];
    
    a = 0;
    for (let i = 0; i < arrlength; i++) {
        arr[i] = [];
        for (let j = 0; j < arrlength; j++) {
            arr[i][j] = a++;
        }
    }

rectSize = c.width / arr.length;
draw()
})

function draw() {
    rectPushX = 0
    rectPushY = 0
    ctx.clearRect(0, 0, c.width, c.width);
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == 0) {
                x = rectPushX;
                y = rectPushY;
                nullposX = j;
                nullposY = i;
                rectPushX = rectPushX + rectSize;


            } else {
                filled(rectPushX, rectPushY);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "black";
                ctx.font = "30px Arial";
                ctx.fillText(arr[i][j], rectPushX + rectSize / 2, rectPushY + rectSize / 2);
                rectPushX = rectPushX + rectSize;
            }
        }
        rectPushY = rectPushY + rectSize;
        rectPushX = 0;
    }
}


c.addEventListener('mousemove', (event) => {
    MousePosX = event.pageX - 8;
    MousePosY = event.pageY - 8;
    span.innerText = 'X: ' + MousePosX + ' ' + 'Y: ' + MousePosY;
})
c.addEventListener('click', () => {
    if (x <= MousePosX && y >= MousePosY && MousePosX <= x + rectSize && MousePosY >= y - rectSize) {
        temp = arr[nullposY][nullposX]
        arr[nullposY][nullposX] = arr[nullposY - 1][nullposX]
        arr[nullposY - 1][nullposX] = temp
        draw()
    }
    if (x + rectSize <= MousePosX && y + rectSize >= MousePosY && MousePosX <= x + 2 * rectSize && MousePosY >= y) {
        temp = arr[nullposY][nullposX]
        arr[nullposY][nullposX] = arr[nullposY][nullposX + 1]
        arr[nullposY][nullposX + 1] = temp
        draw()
    }
    if (x <= MousePosX && y + 2 * rectSize >= MousePosY && MousePosX <= x + rectSize && MousePosY >= y + rectSize) {
        temp = arr[nullposY][nullposX]
        arr[nullposY][nullposX] = arr[nullposY + 1][nullposX]
        arr[nullposY + 1][nullposX] = temp
        draw()
    }
    if (x - rectSize <= MousePosX && y + rectSize >= MousePosY && MousePosX <= x && MousePosY >= y) {
        temp = arr[nullposY][nullposX]
        arr[nullposY][nullposX] = arr[nullposY][nullposX - 1]
        arr[nullposY][nullposX - 1] = temp
        draw()
    }
})