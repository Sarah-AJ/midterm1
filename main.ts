basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.play(music.stringPlayable("C C5 C C5 - - - - ", 500), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("- - F - - - F - ", 500), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    if (pins.digitalReadPin(DigitalPin.P1) >= 10) {
        basic.showString("There is full bright light")
        basic.showIcon(IconNames.Square)
    } else {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
        basic.pause(100)
        serial.writeValue("value", pins.digitalReadPin(DigitalPin.P1))
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    if (pins.analogReadPin(AnalogPin.P0) >= 5) {
        basic.showString("There is loud noise")
        basic.showIcon(IconNames.Square)
    } else {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.pause(100)
        serial.writeValue("voice", pins.analogReadPin(AnalogPin.P0))
    }
})
