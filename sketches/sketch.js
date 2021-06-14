let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  MathJax.startup.promise = MathJax.startup.promise
  .then(() => MathJax.typesetPromise(code()))
  .catch((err) => console.log('Typeset failed: ' + err.message));
  return MathJax.startup.promise;
}
let p;
let pPos = 10;


function setup() {
  createCanvas(400, 400);
  let test = createP(`$another test$`);
  test.class('math');
  p = createP(String.raw`\(\frac{\partial^2y}{\partial t^2} = c^2\frac{\partial^2 y(x_1)}{\partial x^2}\)`);
  p.class('math')
  
  // let p2 = createP(`$a$ this is some text`);
  // p2.id('math')
  // p.style('font-size', '16px');
  p.position(10, 0);
  
  // const math = document.querySelector('#math');
  //   math.innerHTML = '$$\\frac{a}{1-a^2}$$';
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
  console.log();
}