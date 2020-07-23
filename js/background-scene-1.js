let backgroundWave = function(p) {
    var nmobiles=4000;
    var mobiles=[];
    var noisescale;
    var a1, a2, a3, a4, a5, amax;
    var bw=true;

    p.setup = function() {
        p.createCanvas(p.windowWidth/1.5, p.windowHeight/1.5);
        p.background(0);
        p.noFill();  
        p.colorMode(p.HSB, 360, 255, 255, 255);
        p.strokeWeight(.1);
        p.reset();
    }
    
    p.reset = function() {
        noisescale=p.random(.08, .1);
        p.noiseDetail(p.int(p.random(1,5)));
        amax=p.random(5);
        a1=p.random(1, amax);
        a2=p.random(1, amax);
        a3=p.random(1, amax);
        a4=p.random(1, amax);
        a5=10;
        for (var i = 0; i < nmobiles; i++) {
            mobiles[i] = new Mobile(i);
        }
    }
    p.draw = function() {
        //noiseSeed(millis()*.00004);
        for (var i = 0; i < nmobiles; i++) {
            mobiles[i].run();
        }
    }

    // function keyReleased() {
    //     //if (key=="s" || key=="S")saveCanvas("svimg" + day() + "_" + month() + "_" + hour() + "_" + minute() + "_" + second() + ".jpg");
    //         if (key=="s" || key=="S")saveCanvas("POSTHELIOS_NOISE3_" + day() + "_" + month() + "_" + hour() + "_" + minute() + "_" + second() + ".png");
        
    //     if (keyCode==32) reset();
    //     if(key=="r" || key=="R")setup();
    //     if(key=="b" || key=="B")bw=!bw;
    // }

    Mobile = function(index) {
        this.index=index;
        this.velocity=p.createVector(200, 200, 200);
        this.acceleration=p.createVector(200, 200, 200);
        this.position0=p.createVector(p.random(0, p.width), p.random(0, p.height), p.random(0, p.sin(p.height)));
        this.position=this.position0.copy();
        this.trans=p.random(50, 100);
        //  this.hu=(noise(a1*sin(PI*this.position.x/width), a1*cos(PI*this.position.y/height))*720)%360;//random(360);
            this.hu=(p.noise(a1*p.cos(p.PI*this.position.x/p.width), a1*p.sin(p.PI*this.position.y/p.height))*720)%p.random(360);
        this.sat=p.noise(a2*p.sin(p.PI*this.position.x/p.width), a2*p.sin(p.PI*this.position.y/p.height))*255;
        this.bri=p.noise(a3*p.cos(p.PI*this.position.x/p.width), a3*p.cos(p.PI*this.position.y/p.height))*255;
        }

        Mobile.prototype.run = function() {
            this.update();
            this.display();
        };

        // Method to update position
        Mobile.prototype.update = function() {
        this.velocity=p.createVector( 1-2*p.noise(a4+a2*p.sin(p.TAU*this.position.x/p.width), 
                                                                                        a4+a2*p.sin(p.TAU*this.position.y/p.height)), 
                                                                1-2*p.noise(a2+a3*p.cos(p.TAU*this.position.x/p.width), 
                                                                                    a4+a3*p.cos(p.TAU*this.position.y/p.height)));
            
        this.velocity.mult(a5);
            //100*fbm(this.position);
        this.velocity.rotate(p.sin(100)*p.noise(a4+a3*p.sin(p.TAU*this.position.x/p.width)));
        this.position0=this.position.copy();
        this.position.add(this.velocity);
        };

        // Method to display
        Mobile.prototype.display = function() {
            if(bw)p.stroke(255,this.trans); else p.stroke((frameCount*1.8)%360, (millis()%360), (frameCount)%360, this.trans%255);
            //  if(bw)stroke(0,this.trans); else stroke(this.hu,this.sat,this.bri,this.trans);
            
            p.line(this.position0.x, this.position0.y, this.position.x, this.position.y);
            
            
        if (this.position.x>p.width || this.position.x<0||this.position.y>p.height||this.position.y<0) {
            this.position0=p.createVector(p.random(0, p.width), p.random(0, p.height),p.random(0, p.height*p.width));
            this.position=this.position0.copy();
        }
    };
}