
status="";

function preload() {

}

function setup() {
    canvas =createCanvas(500, 400);
    canvas.center();
    create = createCapture(VIDEO);
    create.size(500, 400);
    create.hide()
}
 
 function draw() {
    image(create, 0, 0, 500, 450 );
 }
 
 function start()
 {
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects"
 }
 
 function modelLoaded() {
 console.log("Model Loaded");
 status = true;
 video.loop();
 video.speed(1);
 video.volume(0);
 }