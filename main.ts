input.onButtonPressed(Button.A, function () {
    voeden += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let voeden = 20
let knuffel = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
    voeden += -1
})
basic.forever(function () {
    if (voeden > 10 && knuffel > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (voeden < 10 && knuffel < 10 && (voeden > 0 && knuffel > 0)) {
        basic.showIcon(IconNames.Asleep)
    }
    if (voeden < 0 && knuffel < 0) {
        basic.showIcon(IconNames.Sad)
        dood += 1
    }
})
