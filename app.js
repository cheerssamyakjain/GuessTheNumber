'use strict';

let points=20;
let highscore = 0;
let flag=0;
let random_num=parseInt(Math.random()*20);

// DarkMode and Light Mode
function color_change(fcolors,bcolor){
    document.querySelector("body").style.color=fcolors;
    document.querySelector("body").style.backgroundColor=bcolor;
};

//comments
function value_change(val){
    document.getElementsByClassName('comment')[0].innerHTML = val;
};


//party begins 🤣
document.querySelector(".btn-click").addEventListener('click',
function()
{   
    // getElementByClassName returns list so we are getting info of 0th element
    let val = document.getElementsByClassName('userInput')[0].value;  
    if(val>=1 && val<=20)//1
    {   
        if (points>1)//2
        {
        if(val == random_num)
        {   if (flag==0){
            document.querySelector('.number').innerHTML = val;
            value_change("You Win 🏅:)");
            document.querySelector('.myScore').innerHTML = "Your Score : "+(++points);
            if(points>highscore){highscore=points}
            document.querySelector('.highScore').innerHTML = "Your High Score : "+highscore;
            color_change('Black','green');
            flag=1;
        }
        }

        else if (val>random_num){            
            document.querySelector('.myScore').innerHTML = "Your Score : "+(--points);
            value_change("Too High!!");

         }
        else if (val<random_num){
            document.querySelector('.myScore').innerHTML = "Your Score : "+(--points); 
            value_change("Too Low !!");
        }
        else{}

       }
       else//2
       {document.querySelector('.number').innerHTML = "?";
        value_change("You Lost the Game!");
        document.querySelector('.myScore').innerHTML = "Your Score : 0";
        color_change('Black','white');
        flag=2;

       };
    
    }

    else value_change("Invalid number ! Enter between 1 and 20 :(");//1

});

//Play again! button
function play_again(){
    if (flag==1 || flag==2){
    color_change('Black','white');
    points=20;
    document.querySelector('.myScore').innerHTML = "Your Score : "+ (points);
    value_change("So, Start Guessing...........");
    document.querySelector('.number').innerHTML = "?";
    flag=0;
    random_num=parseInt(Math.random()*20);
    }

};