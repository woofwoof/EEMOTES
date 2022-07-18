function Emote (com: number) {
    if (com == 0) {
        // Electronic Marrionette Of Technological Emotions
        // https://stimulate.systems
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.setVolume(255)
        music.playMelody("E D C E D C G F ", 120)
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.playMelody("E G F E C5 C5 B A ", 120)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playMelody("C5 G G F E D C C ", 120)
    } else if (com == 1) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 407)
        }
    } else if (com == 2) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (com == 3) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . . . .
            `)
        music.playMelody("G D G D G D G D ", 281)
    } else if (com == 4) {
        basic.showLeds(`
            # . # . #
            . . # . .
            # # # # #
            . . # . .
            # . # . #
            `)
        music.playMelody("G - G - A - F - ", 120)
        music.playMelody("G - A - B - B - ", 120)
        music.playMelody("C5 - B - A - G - ", 120)
    } else if (com == 5) {
        basic.showString("SOS")
        music.playMelody("C - C - C - - - ", 120)
        music.playMelody("C C - C C - C C ", 120)
        music.playMelody("- - C - C - C - ", 120)
    } else if (com == 6) {
        basic.showString("Bye!")
        music.playMelody("F G A F F G A F ", 120)
        music.playMelody("A B C5 A B C5 - - ", 120)
    }
}
let msgData = ""
let msgType = ""
let serialInput = ""
let displayQueue: string[] = []
let sendQueue: string[] = []
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
    while (sendQueue.length > 0) {
        serial.writeLine("" + (sendQueue.shift()))
    }
})
basic.forever(function () {
    while (displayQueue.length > 0) {
        basic.showString("" + (displayQueue.shift()))
    }
})
basic.forever(function () {
    serialInput = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (serialInput.length >= 4 && serialInput.charAt(3) == ":") {
        msgType = serialInput.substr(0, 3)
        msgData = serialInput.substr(4, serialInput.length - 4)
        if (msgType == "EMO") {
            displayQueue.push(msgData)
            sendQueue.push("REC:" + msgData)
            Emote(parseFloat(msgData))
        }
    } else {
        sendQueue.push("ERR:" + serialInput)
        basic.showIcon(IconNames.No)
        music.playMelody("D D D D C C C C ", 120)
    }
})
