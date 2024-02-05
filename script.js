(() => {
    let gameId  = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value } = obj;

        if (type === "new_game") {
            newGameLoaded();
        }
    });

    const newGameLoaded = () => {
        const game_chat = document.getElementById('game-log-text') 
        
        if (game_chat){
            console.log(2, game_chat)
        }
        else {
            console.log('no chat')
        }
            
    }
})();