// text to search
// Pesek got 
// Kaycee gave bank  and took 
// Pesek stole  from Kaycee
// Kaycee built a 
// TheSenya discarded
// Knight
// received starting resources 


// names of images
// card_lumber.svg
// card_brick.svg
// card_grain.svg
// card_ore.svg
// city_blue.svg
// /dist/images/city_blue.svg?rev=0c1d112d674e204c57ad


let fullLogs = ''
// this will be a nodelist of the div elements
let currentLogDiv = null
let logCount = 0;

// {'asd' : {'lumber': 0, 'brick': 0, 'sheep': 0, 'grain': 0, 'ore': 0}}
let players = {}

let phraseSet = Set([])

setInterval(function () {

    var logs = document.querySelectorAll('.message-post')
    console.log(1, logs)

    if(logs && logs.length > logCount){
        console.log(2, logs.length)

        logs.forEach(function (message) {
            var text = message.innerText;
            fullLogs = text
            console.log(text)
        });
    }

  }, 5000);


function identifyPlayers(){
    // we can do this by using the 'received starting resources ' text in the chat 
    // maybe also wise to come up with a usecase for when the players d/c and then reconnects
}

function identifyAction(){

}

function readLogs(){    
    var logs = document.querySelectorAll('.message-post')
    console.log(1, logs)

    // if a log exists and its a new log then read it 
    if (logs && logs.length > logCount){
        console.log(2, logs.length)

        logs.forEach(function (message) {
            var text = message.innerText;
            console.log(text)
        });

    }
}

/**
* TODO
 */

// Need to compensate for the user reconnecting, when this happens the old chat will disapear and no info can be gained form it

// 