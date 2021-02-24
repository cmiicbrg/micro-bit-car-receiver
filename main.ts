input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    stop()
})
function schneller () {
    if (v == 0) {
        vor()
    } else {
        v += 128
    }
}
function vor () {
    v = 383
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
    v = 0
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
    langsamer()
})
function zurück () {
    v = 383
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
    schneller()
})
function langsamer () {
    if (v <= 383) {
        stop()
    } else {
        v += -128
    }
}
function schreibeGeschwindigkeit () {
    pins.analogWritePin(AnalogPin.P13, v)
    pins.analogWritePin(AnalogPin.P14, v)
}
let v = 0
stop()
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
radio.setGroup(1)
v = 0
basic.forever(function () {
    serial.writeValue("v", v)
    schreibeGeschwindigkeit()
})
