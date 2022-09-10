var block
function setup() {
  createCanvas(400,400);
  block = createSprite(200,200, 50, 50)
}

function draw() 
{
  background(30);

  if (keyDown(UP_ARROW)){
    block.y = block.y - 5
  }

  if (keyDown(DOWN_ARROW)){
    block.y = block.y + 5
  }

  if (keyDown(LEFT_ARROW)){
    block.x = block.x - 5
  }

  if (keyDown(RIGHT_ARROW)){
    block.x = block.x + 5
  }

  drawSprites()

}






