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

/* function RPS(choice,enemy) {
    let choice = 
        
    }),
    function enemy() {
        let conflict =weapons[new random().nextInt(weapons.length)]
        document.enemyZone.append(conflict)
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
function playCard(url){
    let choice=playCard(url)
    choice.addEventListener('click', function() {
        choice.remove()
        let weapon = document.createElement('img')
        weapon.src = playZone.append(weapon)
    })
}
/*console.log(RPS(choice, enemy))*/