function saturdayFun(activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
}

const mondayWork = function (chore = 'go to the office') {
    return(`This Monday, I will ${chore}.`);
}

function wrapAdjective (wrapper = "--") {
    return function (string = 'special') {
        return(`You are ${wrapper}${string}${wrapper}!`);
    }
}