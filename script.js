// text to search
// Pesek got 
// Kaycee gave bank and took 
// Pesek stole from Kaycee
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
//<img src="/dist/images/settlement_orange.svg?rev=84fea523f52fdea5c10b" alt="settlement" height="20" width="20" class="lobby-chat-text-icon">
// <img src="/dist/images/card_devcardback.svg?rev=9b385c5de02cc6721b95" alt="development card" height="20" width="14.25" class="lobby-chat-text-icon">
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

// class Players {

// }

setInterval(function () {
    console.log('interval')

    var logs = document.querySelectorAll('.message-post')
    //console.log(1, logs)

    // if a log exists and its a new log then read it 
    if (logs && logs.length > logCount){
        //console.log(2, logs.length)

        logs.forEach(function (message) {
            var text = message.innerText;
            //console.log(text)


            if (text) {
                identifyAction(text, message)
            }

            
            //console.log(text)
        });

    }

    console.log('players', players)

  }, 5000);


function identifyPlayers(text) {
    // we can do this by using the 'received starting resources ' text in the chat 
    // maybe also wise to come up with a usecase for when the players d/c and then reconnects

    // looks like player names dont have spaces
    
    let player = text.split(' ')[0]

    // if player is not in the dict of players then add them 
    if (!(player in players)) {
        players[player] = {'lumber': 0, 'brick': 0, 'sheep': 0, 'grain': 0, 'ore': 0, 'unknown': 0};
    }

}

function identifyAction(text, html) {

    let isValidAction = true

    console.log(text, html)

    let lumber = html.querySelectorAll('img[alt="lumber"]').length
    let brick = html.querySelectorAll('img[alt="brick"]').length
    let wool = html.querySelectorAll('img[alt="wool"]').length
    let grain = html.querySelectorAll('img[alt="grain"]').length
    let ore = html.querySelectorAll('img[alt="ore"]').length
    let city = html.querySelectorAll('img[alt="city"]').length
    let settlement = html.querySelectorAll('img[alt="settlement"]').length
    let road = html.querySelectorAll('img[alt="road"]').length
    let devcard = html.querySelectorAll('img[alt="development card"]').length
    
    console.log(`lumber: ${lumber}, brick: ${brick}, wool: ${wool}, grain: ${grain}, ore: ${ore}, city: ${city}, settlement: ${settlement}, road: ${road}, devcard: ${devcard}`)

    if (text.includes('got')) {

        player = text.split(" ")[0]
        console.log('123', player)

        if(player in players){
            players[player]['lumber'] += lumber
            players[player]['brick'] += brick
            players[player]['wool'] += wool
            players[player]['grain'] += grain
            players[player]['ore'] += ore
        }

    } else if (text.includes('gave bank  and took')) {
        //pass
    } else if (text.includes('stole  from')) {
        
        if (text.includes('You stole')) {
            // you stole from X
        } else if (text.includes('you')){
            // X stole from you

        } else {
            // X stole from Y
            
        }

    } else if (text.includes('received starting resources')) {
        //pass
    } else if (text.includes('built a ')) {
        //road = -1 brick, -1 wood
        //city = 
        //settlment

        player = text.split(" ")[0]

        if (road > 0){

            if(player in players){
                players[player]['lumber'] -= 1
                players[player]['brick'] -= 1
            }

        }else if (city > 0){

            if(player in players){
                players[player]['lumber'] -= 1
                players[player]['brick'] -= 1
                players[player]['wool'] -= 1
                players[player]['grain'] -= 1
            }

        }else if (settlement > 0){

            if(player in players){
                players[player]['grain'] -= 2
                players[player]['ore'] -= 3
            }

        }else {
            // should not happen
        }



    } else if (text.includes('discarded')) {

        //pass
    } else if (text.includes('bought')) {
        //pass
    } else if (text.includes('took from bank')) {
        //pass
    } else if (text.includes('gave bank  and took')) {
        //pass
    } else {
        isValidAction = false
    }

    //console.log('isValidAction', isValidAction)
    if (isValidAction) {
        identifyPlayers(text)
    }
}

function readLogs() {    
    var logs = document.querySelectorAll('.message-post')
    console.log(1, logs)

    // if a log exists and its a new log then read it 
    if (logs && logs.length > logCount) {
        console.log(2, logs.length)

        logs.forEach(function (message) {
            var text = message.innerText;
            console.log(text)

            if (text) {
                identifyAction(text, message)
            }
        });
    }
}

/**
* TODO
 */

// Need to compensate for the user reconnecting, when this happens the old chat will disappear and no info can be gained from it

// 


// setInterval(function () {

//     var logs = document.querySelectorAll('.message-post')
//     console.log(1, logs)
    
//     console.log('5sec')
//     readLogs()

//   }, 5000);