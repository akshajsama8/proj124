function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}

function draw(){
    background('grey');
    text(2048,75,100);
    fill('rgb(235, 168, 44)');
    stroke('rgb(235, 168, 44)');
}