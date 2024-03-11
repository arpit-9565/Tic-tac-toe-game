const winPos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var turn=1;
var win=0;
for(var i=0;i<9;i++)
{
    document.querySelectorAll(".cell")[i].addEventListener('click',function(event){
    var visited=this.getAttribute("visit");
    
    if(visited==-1 && win==0)
    {
    if(turn==1)
        this.innerHTML="X";
    else 
        this.innerHTML="O";
    this.setAttribute("visit",turn);
    const cells = document.querySelectorAll(".cell");
    for (var i = 0; i < 8; i++) {
    var first = parseInt(cells[winPos[i][0]].getAttribute("visit"));
    var second = parseInt(cells[winPos[i][1]].getAttribute("visit"));
    var third = parseInt(cells[winPos[i][2]].getAttribute("visit"));

    if (turn === first && turn === second && turn === third) {
        if (turn === 1) {
            document.getElementById('statusText').innerHTML = "Player X won the game 🚩";
        } else {
            document.getElementById('statusText').innerHTML = "Player Y won the game 🚩";
        }
        win=1;
        break;
    }
    }
    turn=1-turn;
    if(win==0)
    {
    if(turn==1)
        document.getElementById('statusText').innerHTML="X's turn";
    else
        document.getElementById('statusText').innerHTML="Y's turn"
    }
    }
    if(win==0){
        checkdraw();
    }
});
}

function checkdraw()
{
    const cells=document.querySelectorAll(".cell");
    let flag=-1;
    for(var i=0;i<9;i++)
    {
        var temp=parseInt(cells[i].getAttribute("visit"));
        if(temp==-1)
          flag=1;
    }
    if(flag==-1)
      document.getElementById('statusText').innerHTML="Draw";
}

// Assuming you have an HTML button with type "restartButton"
const restartButton = document.querySelector('button[type="restartButton"]');

// Add an event listener to the button
restartButton.addEventListener('click', function () {
    // Your restart logic here
    win = 0;
    turn = 1;
    
    // Assuming you have cells with the class "cell"
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].setAttribute("visit", -1);
        cells[i].innerHTML="";
    }
    document.getElementById('statusText').innerHTML="X's turn";
});



