/* Transverse motion
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
let p;
let pPos = 10;
let origin;
let xMax;
let yMax;
let yAxisLabel;
let xAxisLabel;
function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(220);
  origin = new Point(50, height/2)
  xMax = width - origin.x;
  yMax = origin.y;
  setupAxis(origin)
  drawAxis(origin);
  MathJax.typeset()
}

function draw()
{
  background(220);
  drawAxis(origin);
  animateLongitudanalMotion();
  
}

function mousePressed() {
  
}


//-----------------------------------------------------------------------------
function setupAxis(origin)
{
  let labelMargin = 20;
  yAxisLabel = createP(String.raw `\(y\)`);
  yAxisLabel.position(origin.x - labelMargin, 0);
  xAxisLabel = createP(String.raw `\(x\)`);
  xAxisLabel.position(width - labelMargin * 2, origin.y  );
}

/**
* draw 2D axis
* @param {Point} origin
*/
function drawAxis(origin)
{
  strokeWeight(1);
  line(origin.x, 0, origin.x, height);
  line(0, origin.y, width, origin.y);
  fill(0);
  let arrowWidth = 15
  let arrowHeight = arrowWidth * 1.2;
  triangle(origin.x - arrowWidth/2, arrowHeight, origin.x, 0, origin.x + arrowWidth/2, arrowHeight);
  triangle(width - arrowHeight, origin.y - arrowWidth/2, width - arrowHeight, origin.y + arrowWidth/2, width, origin.y);
  
  let gridSize = 50;
  let numGridLines = width / gridSize;
  strokeWeight(0.2);
  stroke('rgba(0,0,200,0.8)');
  for (let i = 0; i < numGridLines; i++)
  {
    line(0, gridSize * i, width, gridSize * i);
    line(gridSize * i, 0, gridSize * i, height);
  }
  strokeWeight(1)
  stroke(0);
  
  translate(origin.x, origin.y);
  scale(1,-1);
}

/**
* draw a dotted line between start and end of a dot length in pixels
* @param {Point} start
* @param {Point} end
* @param {int} dotLength
*/
function dottedLine(start, end, dotLength)
{
  if (typeof(dotLength)==='undefined') dotLength = 5;
  
  let distance = dist(start.x, start.y, end.x, end.y);
  let numDots = floor(distance / dotLength);
  let lerpDiv = 1 / numDots;
  
  for (let i = 0; i < numDots; i+=2)
  {
    line(lerp(start.x, end.x, lerpDiv*i), lerp(start.y, end.y, lerpDiv*i), lerp(start.x, end.x, lerpDiv*(i + 1)), lerp(start.y, end.y, lerpDiv*(i + 1)));
  }
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
  
  let steps = 30;
  for (let i = 0; i < steps; i += 2)
  {
    let t1 = i / steps;
    let t2 = (i + 1) / steps;
    let x1 = bezierPoint(pointArray[0].x, pointArray[1].x, pointArray[2].x, pointArray[3].x, t1);
    let y1 = bezierPoint(pointArray[0].y, pointArray[1].y, pointArray[2].y, pointArray[3].y, t1);
    let x2 = bezierPoint(pointArray[0].x, pointArray[1].x, pointArray[2].x, pointArray[3].x, t2);
    let y2 = bezierPoint(pointArray[0].y, pointArray[1].y, pointArray[2].y, pointArray[3].y, t2);
    
    line(x1,y1,x2,y2);
  }
}

/**
* Draw line terminating with an arrow
* @param {Point} start
* @param {Point} end
* @param {boolean} hasArrowStart
* @param {boolean} hasArrowEnd
*/
function arrowLine(start, end, hasArrowStart, hasArrowEnd)
{
  line(start.x, start.y, end.x, end.y - 20);
  // set angle of arrow
  // set length of arrow
  // get angle from origin
  // calculate x and y components
  // rotate by angle of line
}

/**
* draw a bezier curve terminating in an arrow
* @param {Array[Point]} pointArray
* @param {boolean} hasArrowStart
* @param {boolean} hasArrowEnd
*/
function arrowSpline(pointArray, hasArrowStart, hasArrowEnd)
{
  // set angle of arrow
  // set length of arrow
  // get angle from origin
  // calculate x and y components
  // rotate by angle of line from bezier end and bezier point 0.99
  
}



function drawInfiniteString()
{
  let bezierPoints = [new Point(30,30), new Point(100,100), new Point(130,0), new Point(300,70)];
  dottedSpline(bezierPoints);
  dottedLine(new Point(-50,-50), bezierPoints[0]);
  dottedLine(bezierPoints[3], new Point(350,100));
  
  noFill();
  bezier(bezierPoints[0].x, bezierPoints[0].y, bezierPoints[1].x, bezierPoints[1].y, bezierPoints[2].x, bezierPoints[2].y, bezierPoints[3].x, bezierPoints[3].y);
  let px = bezierPoint(bezierPoints[0].x, bezierPoints[1].x, bezierPoints[2].x, bezierPoints[3].x, 0.9)
  let py = bezierPoint(bezierPoints[0].y, bezierPoints[1].y, bezierPoints[2].y, bezierPoints[3].y, 0.9)
  fill(0);
  circle(px, py, 5);
  let yLabel = createP(String.raw `\(y(x, t)\)`);
  yLabel.position(px, py);
  // for arrows find gradient of bezier curve at point
  // draw line of length along that gradient
  // rotate line + and minus theta (or the angle of the arrow)
  line(bezierPoints[3].x,bezierPoints[3].y,bezierPoints[3].x - 20, bezierPoints[3].y - 20)
  line(bezierPoints[3].x,bezierPoints[3].y,bezierPoints[3].x - 30, bezierPoints[3].y + 1)
}

function drawSmallStringSection()
{
  // F_R and F_L arrows
  // x-axis horizon
  // theta arcs
  // labels
  // Tension arrows
  // ticks and labels
}

function animateTransverseMotion()
{
  if ( typeof animateTransverseMotion.animatePhase === 'undefined' ) animateTransverseMotion.animatePhase = 0.0;
  
  animateTransverseMotion.animatePhase += 0.01;
  let gain = sin(TAU * animateTransverseMotion.animatePhase);
  let steps = 100;
  let stepSize = xMax / steps;
  let freq = 2;
  let phaseDelta = freq * TAU * stepSize / xMax;
  let amplitude = xMax * 0.2;
  for (let i = 0; i < steps; i++)
  {
    let y1 = gain * amplitude * sin(phaseDelta * i);
    let y2 = gain * amplitude * sin(phaseDelta * (i + 1));
    line(stepSize * i , y1, stepSize * (i + 1), y2);
  }
  let y = gain * amplitude * sin(phaseDelta * 57);  
  circle(stepSize * 57, y, 7);
}


function animateModes()
{
  if ( typeof animateModes.animatePhase === 'undefined' ) animateModes.animatePhase = 0.0;
  if ( typeof animateModes.numHarmonics === 'undefined' ) animateModes.numHarmonics = 2.0;
  if ( typeof animateModes.singlePlot === 'undefined' ) animateModes.singlePlot = 0;
  if ( typeof animateModes.modeLabel === 'undefined' ) 
  {
    let n = 1;
    animateModes.modeLabel = createP(`\\[\\omega_${n} = \\frac{${n}\\pi c}{L} \\quad k_${n} = \\frac{${n}\\pi}{L} \\quad \\lambda_${n} = \\frac{2L}{${n}}\\]`);
    animateModes.modeLabel.position(100, 10);
    MathJax.typeset()
  }


  animateModes.animatePhase += 0.01;
  if(animateModes.animatePhase > 1.0) 
  {
    
    animateModes.animatePhase -= 1.0;
    animateModes.numHarmonics++;
    if(animateModes.numHarmonics > 6)
    {
      animateModes.numHarmonics = 2.0;
      animateModes.singlePlot = (animateModes.singlePlot)? 0:1;
    }
    let n = animateModes.numHarmonics -1;
    animateModes.modeLabel.html(`\\[\\omega_${n} = \\frac{${n}\\pi c}{L} \\quad k_${n} = \\frac{${n}\\pi}{L} \\quad \\lambda_${n} = \\frac{2L}{${n}}\\]`)
    MathJax.typeset()
  }
  let steps = 100;
  let stepSize = xMax / steps;
  let amplitude = xMax * 0.2;
  
  for (let h = ((animateModes.singlePlot)? 1:animateModes.numHarmonics-1); h < animateModes.numHarmonics; h++)
  {
    let gain = sin(TAU * animateModes.animatePhase * h) / h;
    let phaseDelta = h * TAU * stepSize / (2 * xMax);
    for (let i = 0; i < steps; i++)
    {
      let y1 = gain * amplitude * sin(phaseDelta * i);
      let y2 = gain * amplitude * sin(phaseDelta * (i + 1));
      line(stepSize * i , y1, stepSize * (i + 1), y2);
    }
    
    let nodeSize = width * 0.023;
    
    for (let i = ((animateModes.singlePlot)? 1: h); i <= h; i++)
    {
      for (let j = 1; j <= i; j++)
      {
        circle(j * xMax / i, 0, nodeSize);
      }
    }
  }
}

function animateLongitudanalMotion()
{
  if ( typeof animateTransverseMotion.animatePhase === 'undefined' ) animateTransverseMotion.animatePhase = 0.0;
  
  animateTransverseMotion.animatePhase += 0.01;
  if(animateModes.animatePhase > 1.0)  animateModes.animatePhase -= 1.0;
  let gain = 1;
  let steps = 400;
  let stepSize = xMax / steps;
  let freq = 2;
  let phaseDelta = freq * TAU * stepSize / xMax;
  let amplitude = xMax * 0.2;
  for (let i = 0; i < steps; i++)
  {
    let y1 = gain * amplitude * sin(sin(phaseDelta * i + (10*sin(animateTransverseMotion.animatePhase)))*phaseDelta * i);
    let y2 = gain * amplitude * sin(sin(phaseDelta * (i+1) + (10*sin(animateTransverseMotion.animatePhase)))*phaseDelta * (i + 1));
    line(stepSize * i , y1, stepSize * (i + 1), y2);
  }
  // let y = gain * amplitude * sin(sin(phaseDelta * 57 + (10*sin(animateTransverseMotion.animatePhase)))*phaseDelta * 57);
  
  // circle(stepSize * 57, y, 7);
}


function drawWaveNumber()
{
  let steps = 200;
  let stepSize = xMax / steps;
  let freq = 2;
  let phaseDelta = freq * TAU * stepSize / xMax;
  let amplitude = xMax* 1000;
  for (let i = 0; i < steps; i++)
  {
    line(stepSize * i , amplitude * sin(phaseDelta * i), stepSize * i + 1, amplitude * sin(phaseDelta * i + 1));
  }
  
  // circle(xMax * 0.2, amplitudesin(freq * TAU * 0.2), 5);
  // circle(xMax * 0.2, amplitudesin(freq * TAU * 0.2), 5);
}
