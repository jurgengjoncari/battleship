- The game is played against the machine
- The players are unable to see each-other's grids.
- Each player places ships in their gameboard

### Setup
- Each player will have a battleship game unit with five ships:
    - Destroyer
    - Submarine
    - Cruiser
    - Battleship
    - Carrier
- Each player will place all these ships vertically or horizontally. 

### Objective
- The objective of the game is to sink all the ships of your opponent. 
- The player will call out grid spaces looking to hit a ship. 
- A ship is sunk when all it's holes have been hit. 

### Game Play
- a player calls out a coordinate
- The oponent will respond hit or miss depending on if part of the ship occupies that space. 
- For every call, for each player, should be kept track which boards are occupied
    - Every player should only call a free board.
    - If all holes in a ship are hit, the oponent announces which ship was sunk. 
- The play goes back to the other player in turn.

### Winning
Whoever sinks the other's ships, wins. 

### Rules review
- For that, I need to set only the coordinates for the extremeties of the ship. 
    - The ship's placement cannot cause part of the ship to be off-the-grid. 
    - A ship cannot overlap another ship
    - A ship cannot be placed diagonally. 
    - Once the game begins, the ships must stay where they are. 