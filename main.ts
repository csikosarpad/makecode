input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showLeds(`
    # . . . #
    # . . . #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    music.playMelody("G A F G A F E D ", 120)
})
