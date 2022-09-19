const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


export default class Player{
    constructor({velocity}){
        this.width = 100
        this.height = 10
        this.color = 'blue'
        this.startingPosition = { x: (canvas.width - this.width) / 2, y: canvas.height - 60}
        this.position = this.startingPosition
        this.velocity = velocity
        
        this.keys = {
            ArrowLeft: {
                pressed: false
            },
            ArrowRight: {
                pressed: false
            }
        }
        this.lastKey
    }

    draw(){
        c.fillStyle = this.color
        c.fillRect(this.startingPosition.x, this.startingPosition.y, this.width, this.height)
    }
    update(){
        this.draw()

        //Player Movement
        if( this.position.x > canvas.width - this.width) this.position.x = 0
        else if(this.position.x < 0) this.position.x = canvas.width - this.width
        else this.position.x += this.velocity.x

        window.addEventListener('keydown', (e)=> {
            switch(e.key){
                case 'ArrowLeft':
                    this.keys.ArrowLeft.pressed = true
                    this.lastKey = 'ArrowLeft'
                break
                
                case 'ArrowRight':
                    this.keys.ArrowRight.pressed = true
                    this.lastKey = 'ArrowRight'
                break
            }
        })

        window.addEventListener('keyup', (e)=> {
            switch(e.key){
                case 'ArrowLeft':
                    this.keys.ArrowLeft.pressed = false
                break
                
                case 'ArrowRight':
                    this.keys.ArrowRight.pressed = false
                break
            }
        })

        if(this.keys.ArrowLeft.pressed == true && this.lastKey === 'ArrowLeft') this.velocity.x = -8
        else if(this.keys.ArrowRight.pressed == true && this.lastKey === 'ArrowRight') this.velocity.x = 8
        else if(this.keys.ArrowLeft.pressed == false && this.keys.ArrowRight.pressed == true) this.velocity.x = 8
        else if(this.keys.ArrowRight.pressed == false && this.keys.ArrowLeft.pressed == true) this.velocity.x = -8
        else this.velocity.x = 0
   }
}










