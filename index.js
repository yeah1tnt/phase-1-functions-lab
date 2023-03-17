// Code your solution in this file!
function distanceFromHqInBlocks(num){
    let blocks = num < 42 ? blocks = 42 - num : blocks = num - 42;
    return blocks;
}

function distanceFromHqInFeet(num){
    let blocks = distanceFromHqInBlocks(num) * 264;
    return blocks;
}

function distanceTravelledInFeet(num1,num2){
    let blocks = num1 < num2 ? blocks = num2 - num1 : blocks = num1 - num2;
    return blocks*264;
}
//400 = 0
//401-2000 = 0.02
//2000-2500 = 25
//2500 = ???
function calculatesFarePrice(num1,num2){
    let money;
    let blocks = distanceTravelledInFeet(num1,num2);
    if(blocks <= 400){
        money = 0;
    }else if(blocks > 400 && blocks <= 2000){
        money = (blocks-400)*0.02;
    }else if(blocks > 2000 && blocks <= 2500){
        money = 25;
    }else{
        money = `cannot travel that far`;
    }
    return money;
}