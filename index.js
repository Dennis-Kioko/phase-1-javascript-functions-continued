// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(star = "*") {
    return function (moon = "special") {
        return `You are ${star}${moon}${star}!`;
    };
}

wrapAdjective()()