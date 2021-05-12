class Redbox extends Box
{
    constructor(x,y)
    {
        super(x,y,30,30);
    }

    display()
    {
        fill("Red");
        stroke("black");
        strokeWeight(1.5)
        super.display();
    }
}