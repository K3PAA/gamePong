import Brick from "./Brick"

export default function drawBricks(bricks){
    let howMuch = 1
    const rowPosition = 6
    let colPosition = 8
    let brickPosX = 20
    let brickPosY = 20

    for(let j=1; j<= rowPosition; j++){
        for(let i=1; i <= colPosition; i++){
            const brick = new Brick({
                position : {
                    x: brickPosX,
                    y: brickPosY
                }
            })
            bricks.push(brick)
            brickPosX += (100 + 20)
            }
        howMuch ++
        if(howMuch === 2){
            colPosition = 7
            brickPosX = 70
        }
        else{
            howMuch = 1 
            colPosition = 8
            brickPosX = 20
        } 
        brickPosY += 30
    }
}

