let backgroundGlitch = function(p) {
    var img;
    //p5.disableFriendlyErrors = true;

    let windowW = window.innerWidth;
    let windowH = window.innerHeight;

    const maxXChange = 125;
    const maxYChange = 5;
    const yNoiseChange = 0.01;
    const timeNoiseChange = 0.013;

    var inverted = false;

    p.preload = function() {
        img = p.loadImage('https://upload.wikimedia.org/wikipedia/commons/b/b1/John_Leak_P02939.jpg');
    }


    p.setup = function() {
        p.createCanvas(300, 300);
        p.background(0);
        p.image(img, -maxXChange, -maxYChange);
        for (let i = 0; i < 100; i++) {
            drawStreak()
        }
    }

    p.draw = function(){
        p.imageMode(p.CENTER);
        for (let i = 0; i < img.height / 60; i++) { //dist(pmouseX, pmouseY, mouseX, mouseY) * 0.04; i++) {
            drawStreak()
        }
    }

    function drawStreak() {
        let y = p.floor(p.random(p.height));
        let h = p.floor(p.random(20, 30)); //floor(random(1, 100));
        let xChange = p.floor(p.map(p.noise(y * yNoiseChange, (p.mouseY * 0.3 + p.frameCount) * timeNoiseChange), 0.06, 0.94, -maxXChange, maxXChange)); //floor(random(-maxXChange, maxXChange));
        let yChange = p.floor(xChange * (maxYChange / maxXChange) * p.random() > 0.1 ? -1 : 1);

        if (p.random() < p.dist(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY) / p.width * 0.3 + 0.0015) p.filter(p.POSTERIZE, p.floor(p.random(2, 6)));
        // if (mouseIsPressed && p.abs(mouseY - y) < 60) {
        //     if (!inverted) p.filter(INVERT);
        //     inverted = true;
        // } else {
        //     if (inverted) p.filter(INVERT);
        //     inverted = false
        // }
        
        //if(random()<0.03)tint(random(255), random(255), random(255));
        
        //copy(img, 0, y, img.width, h, xChange - maxXChange, -maxYChange + y + yChange, img.width, h);
        // p.image(img, xChange - maxXChange, -maxYChange + y + yChange, img.width, h, 0, y, img.width, h);
        p.image(img, xChange - maxXChange, -maxYChange + y + yChange, img.width, h, 0, y, img.width, h);
    }

    // function keyPressed() {
    //     if (key == 's') save();
    //     if (key == 'r') console.log(frameRate());
    // }
}