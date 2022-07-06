input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        # # . # #
                # # . # #
                . . . . .
                # . . . .
                . # # # #
    `)
    for (let index = 0; index < 3; index++) {
        music.playMelody("C D E F G A B C5 ", 407)
    }
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showLeds(`
        . . . . .
                . # # # .
                # # # # #
                . # # # .
                . . . . .
    `)
    music.playMelody("G D G D G D G D ", 281)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
    `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showString("SOS")
    music.playMelody("C - C - C - - - ", 120)
    music.playMelody("C C - C C - C C ", 120)
    music.playMelody("- - C - C - C - ", 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
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
})
//  Electronic Marrionette Of Technological Emotions
//  https://stimulate.systems
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
basic.forever(function on_forever() {
    
})
