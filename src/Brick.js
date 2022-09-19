const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

export default class Brick{
    constructor({position}){
        this.width = 100
        this.height = 10
        this.position = position
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}