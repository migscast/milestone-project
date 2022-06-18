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
let sword = 'sword'
let shield = 'shield'
let hammer ='hammer'
let spear = 'spear'
let knife='knife' 

const urls={
    sword:'pictures/standard sword.jpg',
    shield:'pictures/standard shield.jpg',
    hammer:'pictures/standard hammer.webp',
    spear:'pictures/standard spear.jpg',
    knife:'pictures/standard knife.jpg',
}

let aiSelection

var playerCardsContainer = document.getElementById('playerCards')

const playZoneContainer = document.getElementById('playZone')

const enemyPlayZoneContainer = document.getElementById('enemyZone')

let currentlyPlayingCard = false

let currentlyPlayingEnemyCard = false

let button = document.getElementById('playButton')



function createNewCard(url, typeOfCard){
    let card = document.createElement('img')
    
    card.src = url

    card.id= typeOfCard 
    
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

function playEnemyCard (url){
    let enemyCard = document.createElement('img')
    enemyCard.src = url
    enemyCard.classList.add('card')
    
    if (currentlyPlayingEnemyCard === true) return           
    enemyPlayZoneContainer.append(enemyCard)
    enemyCard.style.margin = 'auto'
    currentlyPlayingEnemyCard = true

    
    
    return enemyCard
}

window.addEventListener('load', () => {
    createNewCard('pictures/standard sword.jpg', 'sword')
    createNewCard('pictures/standard shield.jpg', 'shield')
    createNewCard('pictures/standard hammer.webp', 'hammer')
    createNewCard('pictures/standard knife.jpg','knife')
    createNewCard('pictures/standard spear.jpg','spear')
  });

  function getAiSelection(){
let aiSelection = Math.floor(Math.random()*5)
    return aiSelection
  }
  function assignAiSelection(selection){
   if(selection === 0) {
    return 'sword'
     }else if (selection === 1){
        return 'hammer'
     } else if (selection === 2) {
        return  'shield'
     } else if (selection === 3) {
        return  'knife'
     }else {return'spear'}
  }
     let userCard = playZoneContainer.firstChild

    function fight (selectedCard, enemySelection) {
        
        
     if (selectedCard===enemySelection){
         window.prompt("You tie")
     }
     else if (selectedCard=== "hammer"){
         if(enemySelection==="shield" || "spear"){
             window.prompt("You win")
         }
         else if(enemySelection==="sword" || "knife")
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
         else if (enemySelection==="shield" || "hammer")
             window.prompt("You win")
        
     }
     else if (selectedCard=== "spear"){
         if(enemySelection==="sword" || "knife"){
             window.prompt("You win")
         }
         else if (enemySelection==="shield" || "hammer")
             window.prompt("You lose")
       
     }
     else if(selectedCard=== "shield")
         if(enemySelection==="sword" || "spear"){
             window.prompt("You win")
         }
         else (enemySelection==="hammer" || "knife")
             window.prompt("You lose")
        
     }
    
    button.addEventListener('click', ()=> {
        const randomNumber=getAiSelection()
        const aiSelection=assignAiSelection(randomNumber)
        playEnemyCard(urls[aiSelection])
         fight(userCard, aiSelection)
    })


