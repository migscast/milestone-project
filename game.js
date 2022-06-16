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
                if (currentlyPlayingCard === true)
                playerCardsContainer.append(card)
                card.style.margin = '10px'
                currentlyPlayingCard = false
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
  
/*let aiSelection = math.random()

  if(aiSelection<.20) {
      aiSelection = 'sword'

  }

    function compareCards() {
        let enemyChoice =weapons[new random().nextInt(weapons.length)]
        enemyPlayZoneContainer.append(enemyChoice)
    }    
    if (choice===enemy){
        return("You tie")
    }
    else if (choice=== "hammer"){
        if(enemy==="sheild" || "spear"){
            return("You win")
        }
        else if(enemy==="sword" || "knife"){
            return("You lose")
        }
    }
    else if (choice=== "sword"){
        if(enemy==="knife" || "hammer"){
            return("You win")
        }
        else if(enemy==="shield" || "spear"){
            return("You lose")
        }
    }
    else if (choice=== "knife"){
        if(enemy==="sword" || "spear"){
            return("You lose")
        }
        else if(enemy==="shield" || "hammer"){
            return("You win")
        }
    }
    else if (choice=== "spear"){
        if(enemy==="sword" || "knife"){
            return("You win")
        }
        else if(enemy==="shield" || "hammer"){
            return("You lose")
        }
    }
    else if (choice=== "shield"){
        if(enemy==="sword" || "spear"){
            return("You win")
        }
        else if(enemy==="hammer" || "knife"){
            return("You lose")
        }
    }
    
}*/

