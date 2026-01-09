top bar
square grid


player selects x or o
bot is assigned the selection player didnt choose (x or o)
keep track of player wins, ties and cpu wins

player turn
player clicks tile
end of player turn once clicked on a tile
opponents turn
oppenent is randomly generated a number between 1 - 9 (depends on what tiles have been selected, but it can correspond to the tile number in sequence, left to right)
end of opponent turn

game ends when opponent or player has 3 in row (horizontal, vertical or diaganolly) or runs out of options (tie)



random notes:
stores in array the remaining squares
stores in array winning combinations

states -> none clicked, x or o

using an object to store current state
buttons that are identifiable through 1 to 9
add event listener for each (get using id)

new game button pressed, button as a state


added restart button - should reset the h1, tiles and states (array) so new game can start