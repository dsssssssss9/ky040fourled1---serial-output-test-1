KY040.OnPinPressed(DigitalPin.P0, function () {
    Xcord = 0
    serial.writeValue("Xcord", Xcord)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
})
KY040.onTurned(direction.clockwise, function () {
    Xcord = Xcord + 1
    if (Xcord > 4) {
        Xcord = 4
    }
    serial.writeValue("Xcord", Xcord)
    if (Xcord == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (Xcord == 2) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (Xcord == 3) {
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (Xcord == 4) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
})
KY040.onTurned(direction.counterclockwise, function () {
    Xcord = Xcord - 1
    if (Xcord < 1) {
        Xcord = 0
    }
    serial.writeValue("Xcord", Xcord)
    if (Xcord == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (Xcord == 2) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (Xcord == 3) {
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else if (Xcord == 4) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else if (Xcord <= 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
let Xcord = 0
led.enable(false)
KY040.setKY040(DigitalPin.P15, DigitalPin.P1)
Xcord = 0
basic.showIcon(IconNames.No)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P3, 0)
pins.digitalWritePin(DigitalPin.P4, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
basic.forever(function () {
	
})
