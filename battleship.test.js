const { test, expect } = require('@jest/globals')
const {Ship, Gameboard} = require('./battleship')

const destroyer = new Ship(2)
const submarine = new Ship(3)
const cruiser = new Ship(3)
const battleship = new Ship(4)
const carrier = new Ship(5)

// Setup - Place ships

test("Get the board of a player", () => {
    let playersBoard = new Gameboard
    playersBoard.shipPosition = [
        destroyer,
        {x: 0, y: 1}, 
        'horizontal'
    ]
    expect(playersBoard.grid).toEqual(['a', 2])
})

test("A player tries to place only some ships", () => {})

test("A player tries to position the ship diagonally", () => {})

test("A player tries to place a ship off the grid", () => {})

test("A player tries to place a ship that overlaps another ship", () => {})

// Game play - Call out other player's boards

test("Get the free boards of the opponent", () => {})

test("The player calls out a coordinate that has been called out before", () => {})

test("A player calls out a coordinate that is empty", () => {})

test("Hit cruiser in the second place", () => {
    cruiser.hit(1)
    expect(cruiser.state).toStrictEqual([false, true, false])
    expect(cruiser.isSunk).toBeFalsy()
})

test("Hit destroyer in two places", () => {
    destroyer.hit(0)
    destroyer.hit(1)
    expect(destroyer.state).toStrictEqual([true, true])
    expect(destroyer.isSunk).toBeTruthy()
})

test("The player hits a part of one ship", () => {})

test("A ship was sunk and its name is anounced", () => {})

test("All ships of a player are sunk so the other player's name is announced and the game ends", () => {})

test("All ships of both players are sunk, therefore the game is draw", () => {})