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
// bought
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

    // looks like player names dont have spaces
    
    player = text.split(' ')[0]

    // if player is not in the dict of players then add them 
    if (!(player in players)) {
        players[player] = {'lumber': 0, 'brick': 0, 'sheep': 0, 'grain': 0, 'ore': 0};
    }

}

function identifyAction(text, html){

    let isValidAciton = True

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
    } else if (text.includes('gave bank  and took')) {

    } else if (text.includes('stole  from')) {
        
        if (text.includes('You stole')) {
            // you stole from X
        } else if (text.includes('you')){
            // X stole from you

        } else {
            // X stole from Y
            
        }

    } else if (text.includes('received starting resources')) {

    } else if (text.includes('built a ')) {
        //road
        //city
        //settlment?


    } else if (text.includes('discarded')) {

    } else if (text.includes('bought')) {

    } else if (text.includes('took from bank')) {

    } else if (text.includes('gave bank  and took')) {

    } else {
        isValidAciton = False;
    }

    if (isValidAciton){
        identifyPlayers(text)
    }


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