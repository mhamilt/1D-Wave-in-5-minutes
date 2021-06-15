// Main Sketch
// let screensize = (4 * $("#jumbo-canvas").width()) / 5;
let scale;
let shdr;
let zscl = 150000.0;
//------------------------------------------------------------------------------
preload = function()
{
  shdr = loadShader('shaders/vert.shader', 'shaders/frag.shader');
};
//------------------------------------------------------------------------------
function setup()
{
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  // gl = canvas.getContext('webgl');
  // canvas.parent('sketch-holder');
  pg = createGraphics(200, 200);
  pg.textSize(75);
  pg.background(0, 100);
  fill(255);
  texture(pg);
  shader(shdr);
  console.log(u[0]);
}
//------------------------------------------------------------------------------
function draw()
{
  drawPlate();
}
//------------------------------------------------------------------------------
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}
//------------------------------------------------------------------------------
function drawPlate()
{
  for (var i = 0; i < 10; ++i)
  {
    fd_update();
  }
  background(0);
  scale = width / (Nx - 1);
  push();
  translate(0, 0, -1000);
  rotateX(PI / 3);
  rotateZ(millis() * 0.0002);

  rotateY(millis() /1000);
  translate(-width / 2, -height / 2, 0);
  for (var yi = 0; yi < Ny; ++yi)
  {
    beginShape(TRIANGLE_STRIP);
    for (var xi = 0; xi < Nx; ++xi)
    {
      var cp = (xi) + ((yi) * Nx); // current povar
      vertex(xi * scale, yi * scale, Math.floor(u[cp] * zscl));
      vertex(xi * scale, (yi + 1) * scale, Math.floor(u[cp + Ny] * zscl));
    }
    endShape()
  }

  pop();
}
//------------------------------------------------------------------------------
function mousePressed()
{
  // var point = Math.floor(((Ny - 1) * mouseY / height)) + Math.floor(((Nx - 1) * mouseX / width))* Ny
  var point = constrain(Math.floor(((Ny - 1) * mouseX / height)), 1, Ny - 2) + Ny
  c = [
    mouseY / height,
    mouseX / width
  ]
  addRc(c)
  // console.log(c);
  // u1[point] += 0.0001;
}
// //------------------------------------------------------------------------------
// function mouseDragged()
// {
//   c = [
//     mouseY / height,
//     mouseX / width
//   ]
//   addRc(c)
// }
// //------------------------------------------------------------------------------
