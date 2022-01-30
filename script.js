var xpos = [];
var ypos = [];
var r = [];
var g = [];
var b = [];
var a = [];
var s = [];

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('container');
  background(220);
}

function cir(){
  xpos.push(random(windowWidth));
  ypos.push(random(windowHeight));
  r.push(random(255));
  g.push(random(255));
  b.push(random(255));
  a.push(random(100));
  s.push(random(400));
}

function draw() {
  for (i=0; i<=50; i++){
    noStroke();
    ellipse(xpos[i], ypos[i], s[i]);
    fill(r[i], g[i], b[i], a[i]);
  }
  cir();
}