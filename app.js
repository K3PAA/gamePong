import Player from './src/Player.js'
import bricks from './src/blocks-grid.js'
// import Brick from "./src/Brick.js"

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 500

c.fillRect(0, 0, canvas.width, canvas.height)
console.log(bricks)

// const bricks = []

// function drawBricks(){
//     let howMuch = 1
//     const rowPosition = 6
//     let colPosition = 8
//     let brickPosX = 20
//     let brickPosY = 20

//     for(let j=1; j<= rowPosition; j++){
//         for(let i=1; i <= colPosition; i++){
//             const brick = new Brick({
//                 position : {
//                     x: brickPosX,
//                     y: brickPosY
//                 }
//             })
//             bricks.push(brick)
//             brickPosX += (100 + 20)
//             }
//         howMuch ++
//         if(howMuch === 2){
//             colPosition = 7
//             brickPosX = 70
//         }
//         else{
//             howMuch = 1 
//             colPosition = 8
//             brickPosX = 20
//         } 
//         brickPosY += 30
//     }
// }

// drawBricks()

const player = new Player({
    velocity: {
        x: 0,
        y: 0
    }
})


function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    bricks.forEach( brick => brick.draw())
}
animate()
