console.log('popup.js loaded')

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded')
    function removeAds() {
        console.log('button pressed');
        const idsToRemove = ['in_game_ab_right', 'in_game_ab_left', 'in_game_ab_bottom', 'in_game_ab_bottom_small'];

        idsToRemove.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.remove();
            }
        });

        console.log('ADs removed');
    }

    // Add event listener to a button with id "removeAdsButton"
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'removeAdsButton') {
            removeAds();
        }
    });
});

// function removeAds() {
//     console.log('button pressed')
//     const idsToRemove = ['in_game_ab_right', 'in_game_ab_left', 'in_game_ab_bottom', 'in_game_ab_bottom_small'];

//     idsToRemove.forEach(id => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.remove();
//         }
//     });
    
//     console.log('ADs removed')
// }

// console.log(document.getElementById('removeAdsButton'))

// // Add event listener to a button with id "removeAdsButton"
// document.getElementById('removeAdsButton').addEventListener('click', removeAds);
