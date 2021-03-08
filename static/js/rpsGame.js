function rpsGame(humanChoice)
{
    let humanChoiceValue = humanChoice.id;
    let botChoiceValue;
    botChoiceValue = generateBotChoice();
    let humarScore = getScore(humanChoiceValue,botChoiceValue);
    let gameResultMessage = getGameResultMessage(humarScore);
    publishGameResult(humanChoiceValue,botChoiceValue, gameResultMessage);
}

function generateBotChoice()
{
    let randomInt = Math.floor(Math.random()*3);
    return ["rock","paper","scissors"][randomInt];
}
function getScore(playerAChoiceValue,playerBChoiceValue)
{
    let scoreDB = {
        "rock": {"rock":0.5,"paper":0,"scissors":1},
        "paper": {"rock":1,"paper":0.5,"scissors":0},
        "scissors": {"rock":0,"paper":1,"scissors":0.5}
    }
    let playerAScore = scoreDB[playerAChoiceValue][playerBChoiceValue];
    return playerAScore;
}
function getGameResultMessage(humanScore)
{
    let gameResultMessage=[];
    switch(humanScore)
    {
        case 0:
            gameResultMessage = {
                "message":"You lost!",
                "color":"red"
            };
            break;
        case 0.5:
            gameResultMessage = {
                "message":"Game Drawn",
                "color":"yellow"
            };
            break;
        case 1:
            gameResultMessage = {
                "message":"You Won!",
                "color":"green"
            };
            break;
        default:
            gameResultMessage = {
                "message":"Something went wrong!",
                "color":"purple"
            };
    };
    return gameResultMessage;
}

function publishGameResult(humanChoiceValue, botChoiceValue,gameResultMessage,)
{
    let imgDB = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    let humanDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let botDiv = document.createElement("div");

    let rpsGameFlexboxDiv = document.getElementById("rps-game-div");
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    humanDiv.innerHTML = "<img src='"+imgDB[humanChoiceValue]+"' width=150 height=150 style='box-shadow: 0px 10px 50px blue;'>";
    messageDiv.innerHTML = "<h1 style='color:"+gameResultMessage["color"]+"; font-size:60px; padding: 30px;'>"+gameResultMessage["message"]+"</h1>";
    botDiv.innerHTML = "<img src='"+imgDB[botChoiceValue]+"' width=150 height=150 style='box-shadow: 0px 10px 50px red;'>";
    
    rpsGameFlexboxDiv.appendChild(humanDiv);
    rpsGameFlexboxDiv.appendChild(messageDiv);
    rpsGameFlexboxDiv.appendChild(botDiv);
}