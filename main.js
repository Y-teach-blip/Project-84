canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



car2_width = 120;
car2_height = 70;
background_image = "racing.jpg"
car2_image =  "car2.png";
car2_x = 49;
car_y = 180;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
    background_imgTag.src = background_image; //load image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar2; //setting a function, onloading this variable
    car2_imgTag.src = car2_image; //load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


