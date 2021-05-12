class Greenbox extends Box
{
    constructor(x,y)
    {
        super(x,y,30,30);
    }

    display()
    {
        fill("green");
        stroke("black");
      strokeWeight(1.5)
        super.display();
    }
}