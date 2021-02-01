class Form
{
    constructor()
    {
        this.input = createInput("NAME");

        this.button = createButton("CLICK ME");

        this.greeting = createElement('h3');

        this.title = createElement('h2');

    }

    display()
    {
       
       this.title.html("Car Racing Game");
       
       this.title.position(width/2,0);

      
       this.input.position(width/2,height/2-300);
           
      
       this.button.position(width/2+200,height/2-300);
       this.button.mousePressed(()=>{
          this.input.hide();
           this.button.hide();

          var myname = this.input.value();
          

           
           this.greeting.html("Hello " + myname);
           this.greeting.position(width/2,height/2-400);
           playerCount = playerCount+1;

           player.name = myname;
           player.index = playerCount;

           player.updateCount(playerCount)
           player.update();
       })

    }

    hideForm()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();


    }
}