// text to search
// Pesek got 
// Kaycee gave bank  and took 
// Pesek stole  from Kaycee
// Kaycee built a 
// TheSenya discarded
// Knight
// received starting resources 
// took from bank brick
// took from bank brick wool
// discarded 
// Lesya stole  from you


// names of images
// card_lumber.svg
// card_brick.svg
// card_grain.svg
// card_wool.svg
// card_ore.svg

// city_blue.svg
// /dist/images/city_blue.svg?rev=0c1d112d674e204c57ad


let fullLogs = ''
// this will be a nodelist of the div elements
let currentLogDiv = null
let logCount = 0;

// {'asd' : {'lumber': 0, 'brick': 0, 'sheep': 0, 'grain': 0, 'ore': 0}}
let players = {}

let phraseSet = new Set(['stole  from', 'gave bank  and took', 'built a'])


/**
    * @param {string} type
    * @param {Array} amountRange, specifies the range of amount of cards ie, [1,1] (1 card) or [1,2] 1-2 of that card
    * @return {Promise<TicketingSystem.Ticket[]>}
*/

class Cards {
    constructor(type, amountRange) {
      this.type = type;
      this.amountRange = amountRange;
    }
}

setInterval(function () {

    var logs = document.querySelectorAll('.message-post')
    console.log(1, logs)

    // if a log exists and its a new log then read it 
    if (logs && logs.length > logCount){
        console.log(2, logs.length)

        logs.forEach(function (message) {
            var text = message.innerText;
            console.log(text)


            if (text) {
                identifyAction(text, message)
            }

            
            //console.log(text)
        });

    }

  }, 5000);


function identifyPlayers(){
    // we can do this by using the 'received starting resources ' text in the chat 
    // maybe also wise to come up with a usecase for when the players d/c and then reconnects

    if (player in players) {
        
    }

}

function identifyAction(text, html){

    if (text.includes('got')) {

        let lumber = html.querySelectorAll('img[alt="lumber"]').length
        let brick = html.querySelectorAll('img[alt="brick"]').length
        let wool = html.querySelectorAll('img[alt="wool"]').length
        let grain = html.querySelectorAll('img[alt="grain"]').length
        let ore = html.querySelectorAll('img[alt="ore"]').length
        // console.log('lumber = ', lumber)
        // console.log('brick = ', brick)
        // console.log('wool = ', wool)
        // console.log('grain = ', grain)
        // console.log('ore = ', ore)
    }

    // if (text.includes('got')) {
        

    // }else if (text.includes('gave bank  and took ')) {

    // }else if (text.includes('stole  from')) {

    // }else if (text.includes('got')) {

    // }else if (text.includes('got')) {

    // }else if (text.includes('got')) {

    // }else if (text.includes('got')) {

    // }


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


            if (text) {
                identifyAction(text, message)
            }

            
            //console.log(text)
        });

    }
}

/**
* TODO
 */

// Need to compensate for the user reconnecting, when this happens the old chat will disapear and no info can be gained form it

// 


// setInterval(function () {

//     var logs = document.querySelectorAll('.message-post')
//     console.log(1, logs)
    
//     console.log('5sec')
//     readLogs()

//   }, 5000);