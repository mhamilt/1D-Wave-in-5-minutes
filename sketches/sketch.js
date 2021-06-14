/* 1D wave derivation

Brief: Show the infinite string and zoom to a section of the string illustrating the forces at a play.
Ingredients:
  - Draw Axis: (define function) 
    - Draw a line
    - Draw a triangle
    - define an origin
      - define a Point class
    - annotate with MathJax
  - draw spline on graph
    - annotate ends with arrows
    - show infinity with dotted section
    - draw point on spline
    - annotate point on spine
  - show transverse motion restraint
    - show Longitudinal motion
    - show transverse motion
  - zoom on small section
    - draw box around section
    - make section in box larger
    - fit new section to axes
  - show forces
    - illustrate F_L and F_R force up and down
    - dotted line off to T_0 and -T_0
    - dotted line across x_axis bisecting string
    - annotate these points with dotted line and ticks  x1 and x_1 + \Deltax 
    - arc to show angle in-between
*/
//-----------------------------------------------------------------------------
/**
 * Simple point class
 */
class Point {
  /**
   * @param {int} x 
   * @param {int} y 
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
//-----------------------------------------------------------------------------
/**
 * draw 2D axis
 * @param {Point} origin 
 */
function drawAxis(origin)
{
  // - Draw a line
  // - Draw a triangle
  // - define an origin
  //   - define a Point class
  // - annotate with MathJax
  // - draw grid
}

/**
 * draw a dotted line between start and end of a dot length in pixels
 * @param {Point} start 
 * @param {Point} end 
 * @param {int} dotLength 
 */
function dottedLine(start, end, dotLength)
{
  if (typeof(dotLength)==='undefined') dotLength = 15;
  // get length between start and end
  // divide by dotLength * 2
  // for line division mod 2 lerp between points
  
}

/**
 * Draw a dotted bezier curve through points given in pointArray
 * pointArray must be length >= 4
 * @param {Array[Point]} pointArray array of Point objects
 * @param {int} dotLength length of dotting in pixels
 */
function dottedSpline(pointArray, dotLength)
{
  if (typeof(dotLength)==='undefined') dotLength = 15;
  // get length between start and end
  // divide by dotLength * 2
  // for line division mod 2 lerp between points
  for (let i = 0; i <= pointArray.length; i++) 
  {
    // let t = i / steps;
    // let x = bezierPoint(x1, x2, x3, x4, t);
    // let y = bezierPoint(y1, y2, y3, y4, t);
    // circle(x, y, 5);
  }
}
//-----------------------------------------------------------------------------
let p;
let pPos = 10;

function setup() 
{
  createCanvas(400, 400);
  let test = createP(`$another test$`);
  test.class('math');
  p = createP(String.raw `\(\frac{\partial^2y}{\partial t^2} = c^2\frac{\partial^2 y(x_1)}{\partial x^2}\)`);
  p.position(10, 0);

  MathJax.typeset()
}

function draw() {
  background(220);
  p.position(pPos, 0);
  pPos++;
  if (pPos > (width - p.size().width)) {
    pPos = 0;
  }
  rect(10, 10, 100, 100);
}

function mousePressed() {

}