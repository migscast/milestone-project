/* draw cards
hover over cards(make card look bigger)
give each card a value(1-5)
select card
play card(move card to center to be played)
cpu chooses randomly (random number generator 1-5)
compare choices
win screen
lose screen
record results
option to play again

*/
const weapons = ["hammer", "sword", "shield", "spear", "knife"]

var playerCardsContainer = document.getElementById('playerCards')

const playZoneContainer = document.getElementById('playZone')

const enemyPlayZoneContainer = document.getElementById('enemyZone')

let currentlyPlayingCard = false

function createNewCard(url){
    let card = document.createElement('img')

    card.src = url
    
    card.classList.add('card')  
       card.addEventListener('click', function() {
           if (currentlyPlayingCard === true) return
           
           playZoneContainer.append(card)
            card.style.margin = 'auto'
           currentlyPlayingCard = true

           card.addEventListener('click', function() {
                if (currentlyPlayingCard === true){
                playerCardsContainer.append(card)
                card.style.margin = '10px'
                currentlyPlayingCard = false
            }else {playZoneContainer.append(card)
            card.style.margin = 'auto'
            currentlyPlayingCard = true}
           })          
       })       
    playerCardsContainer.append(card)
    return card
}


window.addEventListener('load', () => {
    createNewCard('pictures/standard sword.jpg')
    createNewCard('pictures/standard shield.jpg')
    createNewCard('pictures/standard hammer.webp')
    createNewCard('pictures/standard knife.jpg')
    createNewCard('pictures/standard spear.jpg')
  });
  
/*let aiSelection = Math.floor(Math.random()*5

  if(aiSelection = 0) {
      aiSelection = 'sword'
    }else if (aiSelection = 1){
        aiSelection = 'hammer'
    } else if (aiSelection = 2) {
        aiSelection = 'shield'
    } else if (aiSelection = 3) {
        aiSelection = 'knife'
    }else {aiSelection = 'spear'}

    let fight = function compareCards(currentlyPlayingCard, aiSelection) {
        
        enemyPlayZoneContainer.append(enemyChoice)
    }    
    if (choice===enemy){
        window.prompt("You tie")
    }
    else if (choice=== "hammer"){
        if(enemy==="shield" || "spear"){
            window.prompt("You win")
        }
        else (enemy==="sword" || "knife"){
            window.prompt("You lose")
        }
    }
    else if (choice=== "sword"){
        if(enemy==="knife" || "hammer"){
            window.prompt("You win")
        }
        else (enemy==="shield" || "spear"){
            window.prompt("You lose")
        }
    }
    else if (choice=== "knife"){
        if(enemy==="sword" || "spear"){
            window.prompt("You lose")
        }
        else (enemy==="shield" || "hammer"){
            window.prompt("You win")
        }
    }
    else if (choice=== "spear"){
        if(enemy==="sword" || "knife"){
            window.prompt("You win")
        }
        else (enemy==="shield" || "hammer"){
            window.prompt("You lose")
        }
    }
    else if (choice=== "shield"){
        if(enemy==="sword" || "spear"){
            window.prompt("You win")
        }
        else (enemy==="hammer" || "knife"){
            window.prompt("You lose")
        }
    }
    button.addEventListener('click', ()=> {
        fight(currentlyPlayingCard, aiSelection)
    })
}*/

