"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Jannick Lohner - 2026-03-20
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal

for(let line of BATTLEFIELD){
    let lineCountDom = 0
    let lineCountSavior = 0
    for(let cell of line){
        if(cell === O){
            lineCountDom ++
        }
        if(cell === X){
            lineCountSavior ++
        }
    }
    if(lineCountDom === BATTLEFIELD.length){
        console.log("Oh no Dr. Dom won horizontal!")
    }
    if(lineCountSavior === BATTLEFIELD.length){
        console.log("Hurray the Savior won horizontal!")
    }
}

// Check Vertical

for(let i = 0; i < BATTLEFIELD.length; i++){
    let lineCountDom = 0
    let lineCountSavior = 0
    for(let j = 0; i < BATTLEFIELD.length; i++){
        if(BATTLEFIELD[j][i] === O){
            lineCountDom ++
        }
        if(BATTLEFIELD[j][i] === X){
            lineCountSavior ++
        }
    }
    if(lineCountDom === BATTLEFIELD.length){
        console.log("Oh no Dr. Dom won vertical!")
    }
    if(lineCountSavior === BATTLEFIELD.length){
        console.log("Hurray the Savior won vertical!")
    }
}

// Check Main Diagonal

let lineCountDom = 0
let lineCountSavior = 0

for(let i = 0; i < BATTLEFIELD.length; i++){
    if(BATTLEFIELD[i][i] === O){
        lineCountDom ++
    }
    if(BATTLEFIELD[i][i] === X){
        lineCountSavior ++
    }
    if(lineCountDom === BATTLEFIELD.length){
        console.log("Oh no Dr. Dom won on  the main diagonal!")
    }
    if(lineCountSavior === BATTLEFIELD.length){
        console.log("Hurray the Savior won the main diagonal!")
    }
}

// Check Anti Diagonal
lineCountDom = 0
lineCountSavior = 0

for(let i = BATTLEFIELD.length - 1; i >= 0 ; i--){
    if(BATTLEFIELD[i][i] === O){
        lineCountDom ++
    }
    if(BATTLEFIELD[i][i] === X){
        lineCountSavior ++
    }
    if(lineCountDom === BATTLEFIELD.length){
        console.log("Oh no Dr. Dom won the anti diagonal!")
    }
    if(lineCountSavior === BATTLEFIELD.length){
        console.log("Hurray the Savior won the anti diagonal!")
    }
}