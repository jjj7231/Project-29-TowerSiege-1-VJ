class Bluebox extends Box
{
    constructor(x,y)
    {
        super(x,y,30,30);
    }

    display()
    {
        fill("Blue");
        stroke("black");
      strokeWeight(1.5)
        super.display();
    }
}