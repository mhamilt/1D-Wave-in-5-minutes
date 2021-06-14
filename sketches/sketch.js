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

let promise = Promise.resolve();  // Used to hold chain of typesetting calls

let p;
let pPos = 10;

function setup() 
{
  createCanvas(400, 400);
  let test = createP(`$another test$`);
  test.class('math');
  p = createP(String.raw`\(\frac{\partial^2y}{\partial t^2} = c^2\frac{\partial^2 y(x_1)}{\partial x^2}\)`);  
  p.position(10, 0);

  MathJax.typeset()
}

function draw() 
{
  background(220);
  p.position(pPos, 0);  
  pPos++;
  if (pPos> (width - p.size().width))
  {
    pPos = 0;
  }
  rect(10,10,100,100);
}

function mousePressed() 
{      
  
}