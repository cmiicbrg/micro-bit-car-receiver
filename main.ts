input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    stop()
})
function vor () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
function stop () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    vor()
})
function zurück () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
}
input.onButtonPressed(Button.AB, function () {
    zurück()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "vor") {
        vor()
    } else if (receivedString == "zurück") {
        zurück()
    } else if (receivedString == "stop") {
        stop()
    }
})
input.onButtonPressed(Button.B, function () {
	
})
stop()
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
radio.setGroup(1)
pins.analogWritePin(AnalogPin.P13, 384)
pins.analogWritePin(AnalogPin.P14, 384)
basic.forever(function () {
	
})
