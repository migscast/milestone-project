/* draw cards
hover over cards(make card look bigger)
give each card a value(1-5)
select card
play card(move card to center to be played)
cpu chooses randomly (random number generator 1-5)
compare currentlyPlayingCards
win screen
lose screen
record results
option to play again

*/
const weapons = ["hammer", "sword", "shield", "spear", "knife"]

var playerCardsContainer = document.getElementById('playerCards')

const playZoneContainer = document.getElementById('playZone')

const enemyPlayZoneContainer = document.getElementById('aiSelectionZone')

let currentlyPlayingCard = false

function createNewCard(url, typeOfCard){
    let card = document.createElement('img')
    
    card.src = url

    var typeOfCard = 
    
    card.classList.add('card')
    function playCard(){  
       card.addEventListener('click', function() {
           if (currentlyPlayingCard === true) return
           
           playZoneContainer.append(card)
            card.style.margin = 'auto'
           currentlyPlayingCard = true

           card.addEventListener('click', function() {
                if (currentlyPlayingCard === true)
                playerCardsContainer.append(card)
                card.style.margin = '10px'
                currentlyPlayingCard = false
                playCard()
           })          
       })       
    }
    playCard()
    playerCardsContainer.append(card)
    return card
}



window.addEventListener('load', () => {
    createNewCard('pictures/standard sword.jpg', 'sword')
    createNewCard('pictures/standard shield.jpg', 'shield')
    createNewCard('pictures/standard hammer.webp', 'hammer')
    createNewCard('pictures/standard knife.jpg','knife')
    createNewCard('pictures/standard spear.jpg','spear')
  });
  
let aiSelection = Math.floor(Math.random()*5)

  if(aiSelection = 0) {
      aiSelection = 'sword'
    }else if (aiSelection = 1){
        aiSelection = 'hammer'
    } else if (aiSelection = 2) {
        aiSelection = 'shield'
    } else if (aiSelection = 3) {
        aiSelection = 'knife'
    }else {aiSelection = 'spear'}

    let userCard = playZoneContainer.firstChild

    let fight = function(selectedCard, enemySelection) {
        
        
    if (selectedCard===enemySelection){
        window.prompt("You tie")
    }
    else if (selectedCard=== "hammer"){
        if(enemySelection==="shield" || "spear"){
            window.prompt("You win")
        }
        else (enemySelection==="sword" || "knife")
            window.prompt("You lose")
        
    }
    else if (selectedCard=== "sword"){
        if(enemySelection==="knife" || "hammer"){
            window.prompt("You win")
        }
        else (enemySelection==="shield" || "spear")
            window.prompt("You lose")
        
    }
    else if (selectedCard=== "knife"){
        if(enemySelection==="sword" || "spear"){
            window.prompt("You lose")
        }
        else (enemySelection==="shield" || "hammer")
            window.prompt("You win")
        
    }
    else if (selectedCard=== "spear"){
        if(enemySelection==="sword" || "knife"){
            window.prompt("You win")
        }
        else (enemySelection==="shield" || "hammer")
            window.prompt("You lose")
        
    }
    else (selectedCard=== "shield")
        if(enemySelection==="sword" || "spear"){
            window.prompt("You win")
        }
        else (enemySelection==="hammer" || "knife")
            window.prompt("You lose")
        
    }
    
    button.addEventListener('click', ()=> {
        enemyPlayZoneContainer.append(aiSelection)
        fight(userCard, aiSelection)
    })


