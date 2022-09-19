import Player from './src/Player.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 512

c.fillRect(0, 0, canvas.width, canvas.height)



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
}
animate()
