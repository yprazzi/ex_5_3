input.onButtonPressed(Button.A, function () {
    multiplicateur += 1
    basic.showNumber(multiplicateur)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(multiplicateur * multiplicateur)
})
input.onButtonPressed(Button.B, function () {
    multiplicateur += -1
    basic.showNumber(multiplicateur)
})
let multiplicateur = 0
multiplicateur = 0
