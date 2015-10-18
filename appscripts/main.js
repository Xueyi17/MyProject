//http://speckyboy.com/demo/windmill-demo/index.html
require(
    [],
    function () {

        // This is the pop-up that appears when the user visit the webpage. By keying in a number, it allows the user to set the difficulty of the game.
        var difficulty = parseInt(prompt("Hello! Welcome to 'Finding Nemo'! This is a very simple game. Click the 'Start' button when you are ready to start the game. Then find Nemo and click on it as many times as possible within 10 seconds! The more clicks you get, the higher your score! You can choose the difficulty level by entering any number between 1-10, 1 being easiest, 10 being most difficult. Have fun!"));
        if (difficulty != null) {
        
}
            
        console.log("yo, I'm alive!");

        var audio = new Audio("resources/Startup.wav");
        audio.play();

        var paper = new Raphael(document.getElementById("mySVGCanvas"));

        var counter = 0;
        var maxCount = 10;
        var starttime;
        var totaltime;

        var startButton = paper.circle(300, 200, 40);
        var startText = paper.text(300, 200, 'START');
        startButton.attr({
        	stroke: "black",
        	fill: "lightblue"
        });

        startButton.hide();
        startText.hide();

        // Before the game starts, the start button will show on the webpage.
        var ready = function(){
        	startButton.show();
        	startText.show();
        }

        // This defines how the game will be like when the game starts. The start button will dissapear. 
        // rect1 is the 'nemo' that the user is supposed to click on. It will appear when the game starts.
        var start = function (){
        	console.log("game is starting");
        	startButton.hide();
        	startText.hide();
            rect1.show();

            // The timer will start once the start button is clicked.
        	counter = 0;
        	starttime = Date.now();
        	console.log("time = " + starttime);

            // This is to call the moveSquare function as defined in the later when the game starts.
        	moveSquare();

            // This is the game timer which will time the moveSquare function. This also links the difficulty that the user typed in the prompt box. 
            // We linked the difficulty level with the speed of the moveSquare function. The speed will increase when the user key in a higher number for the difficulty.
            gameTimer = setInterval(moveSquare, 3/difficulty*1000);

            // This is to end the game after 10 seconds.
            setTimeout(endGame, 10000);

            var audio1 = new Audio("resources/Background.mp3");
            audio1.play();
           
        }

        startButton.node.addEventListener('click', start);

        //-----------------------------------------

        var rect1 = paper.rect(-100,-100,100, 100);
        rect1.attr({
            'fill': "url('http://www.icon100.com/up/3486/96/10-clown-fish-fish-nemo.png')"
        });

        // This defines the randInt function which will later allow the moveSqaure function to move randomly.
         var randInt = function( m, n ) {
            var range = n-m+1;
            var frand = Math.random()*range;
            return m+Math.floor(frand);
        }


        var moveSquare = function(){
            var posX, posY;

                // with posX and posY being random, rect1 will appear randomly in the box.
                posX = randInt(0,5);
                posY = randInt(0,3);
                rect1.attr({
                    x: posX*100,
                    y: posY*100

                });

                // THis is to keep track of the score in the console.
                console.log("Your score now is " + counter*10)
            
        }

        // This links the counter to the number of clicks.
        var addClick = function(){

            counter++;
        }

        // The game ends when 10 seconds is over. Confirm will allow a pop-up box to appear. The score will be the number of clicks multiply by 10.
        var endGame = function(){
            confirm("Time's up! Your score is " + counter*10 + "! Good job!");
            ready();
            // When the game ends, the timer will be reset. The rect1 which is 'Nemo' will disappear while the start button will appear again.
            clearTimeout(gameTimer);
            rect1.hide();
            audio.pause();

        }

        rect1.node.addEventListener('click', addClick);

                      
      

            
        ready(); // Put the start button on the screen 
    });





