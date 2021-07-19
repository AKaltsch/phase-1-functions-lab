// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
        return blocks - 42
    } else {
        return (blocks - 42) * -1
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(block1, block2) {
    let block;
    if (block2 > block1) {
        block = block2 - block1
    } else {
        block = block1 - block2
    }
    return block * 264   
}

function calculatesFarePrice(block1, block2) {
    let block = distanceTravelledInFeet(block1, block2)
    if (block < 400) {
        return 0
    } else if (block <= 2000) {
        return ((block - 400) * 0.02)
    } else if (block <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}