function preload() {

}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();
    video = createCapture(VIDEO);
    video.position(460, 20)
    video.size(600 , 800)
}