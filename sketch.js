function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  
  let value = 0
  square(150,10,100);

   
  ellipse(180,40,20,20);
  ellipse(220,40,20,20);
  square(190,60,20);
  line(200,150,200,110);
  circle(200,200,140);
  line( 270,200,350,150);
  line( 130,200,55,150);
  circle(50,140,50);
  circle(350,145,50);
  line(170,300,170,265);
  square(150,300,40);
  
  line(220,300,220,265);
  square(200,300,40);
  


    
  
fill ('lightgreen');
if(mouseIsPressed){
fill('gold')
circle(200,200,100)  
  fill('silver')
  circle(200,200,60)
  
}
}