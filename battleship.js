class Ship {
    constructor(length) {
        this.length = length
        this.state = (new Array(length)).fill(false)
        this.hit = function (position) {
            this.state[position] = true
        }
    }
    
    get isSunk() {
        return this.state.every((position) => position == true)
    }
}


class Gameboard {
    constructor() {
        this.ships = {
            destroyer: new Ship(2),
            submarine: new Ship(3),
            cruiser: new Ship(3),
            battleship: new Ship(4),
            carrier: new Ship(5),
        }

        this.grid = (new Array(10)).fill(new Array(10))
    }

    set shipPosition([ship, position, direction]) {
        for (let i = 0; i < ship.length; i++) {
            if (direction == 'horizontal') {
                this.grid[position.x][position.y + i] = ship
            } else if (direction == 'vertical') {
                this.grid[position.x + i][position.y] = ship
            }
        }
    }

    receiveAttack(x, y) {

    }
}

module.exports = {Ship, Gameboard}