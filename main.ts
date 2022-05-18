radio.onReceivedNumber(function (receivedNumber) {
    Luces = 0
    if (receivedNumber == 6) {
        cuteBot.backforward()
        Luces = 1
    } else if (receivedNumber == 3) {
        cuteBot.forward()
    } else if (receivedNumber == 2) {
        cuteBot.stopcar()
        cuteBot.closeheadlights()
    } else if (receivedNumber == 5) {
        cuteBot.motors(76, 100)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
    } else if (receivedNumber == 4) {
        cuteBot.motors(76, 100)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
    }
})
let Luces = 0
radio.setGroup(1)
loops.everyInterval(500, function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 30) {
        cuteBot.stopcar()
        cuteBot.closeheadlights()
        music.stopAllSounds()
    }
})
basic.forever(function () {
    while (Luces == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        basic.pause(500)
        cuteBot.closeheadlights()
        basic.pause(500)
    }
})
basic.forever(function () {
    while (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 30) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.pause(500)
        cuteBot.closeheadlights()
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
        music.playTone(440, music.beat(BeatFraction.Quarter))
        basic.pause(500)
        cuteBot.closeheadlights()
    }
})
