def on_button_pressed_a():
    basic.show_leds("""
        # # . # #
                # # . # #
                . . . . .
                # . . . .
                . # # # #
    """)
    for index in range(3):
        music.play_melody("C D E F G A B C5 ", 407)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_leds("""
        . . . . .
                . # # # .
                # # # # #
                . # # # .
                . . . . .
    """)
    music.play_melody("G D G D G D G D ", 281)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
    """)
    music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
            5000,
            1,
            255,
            255,
            500,
            SoundExpressionEffect.WARBLE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_string("SOS")
    music.play_melody("C - C - C - - - ", 120)
    music.play_melody("C C - C C - C C ", 120)
    music.play_melody("- - C - C - C - ", 120)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    basic.show_leds("""
        # . # . #
                . . # . .
                # # # # #
                . . # . .
                # . # . #
    """)
    music.play_melody("G - G - A - F - ", 120)
    music.play_melody("G - A - B - B - ", 120)
    music.play_melody("C5 - B - A - G - ", 120)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

# Electronic Marrionette Of Technological Emotions
# https://stimulate.systems
basic.show_leds("""
    . # . # .
        . . . . .
        . . # . .
        . # . # .
        # . . . #
""")
music.set_volume(255)
music.play_melody("E D C E D C G F ", 120)
basic.show_leds("""
    . # . # .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
""")
music.play_melody("E G F E C5 C5 B A ", 120)
basic.show_leds("""
    . # . # .
        . . . . .
        . . # . .
        . # . # .
        # . . . #
""")
music.play_melody("C5 G G F E D C C ", 120)

def on_forever():
    pass
basic.forever(on_forever)
