canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;

background_image = "racing.jpg";
console.log("background image =" + background_image);

car1_y = 10;
car1_x = 10;

car2_width = 120;
car2_height = 70;

background_image = "racing.jpg";
console.log("background image =" + background_image);

car2_y = 10;
car2_x = 100;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
    background_imgTag.src = background_image; //load image

    car2_ackground_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar1; //setting a function, onloading this variable
    car2_imgTag.src = background_image; //load image
}

function uploadBackground() {
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}