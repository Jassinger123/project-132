img ="";

status="";
function preload(){
    img=loadImage('music_instrument.png');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    object_detector=ml5.object_detector('cocossd',modal_loaded)
}

function modal_loaded(){
    console.log("modal_loaded")
    status=true;
    object_detector.detect(img,got_results)
    document.getElementById("status").innerHTML="status=Detecting Objects"

}

function got_results(error,results){
 if (error) {
    console.log(error);
 }
 console.log(results)
}



function draw(){
    image(img,0,0,640,420);
    fill("blue");
    text("Voilin", 50, 70);
    noFill();
    stroke("red");
rect(30,60,450,350);


fill("#FF0000");
    text("Pillow", 240, 100);
    noFill();
    stroke("red");
rect(200,80,400,300);

}

function button_home(){
    window.location=("index.html");
}








