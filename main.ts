radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        cuteBot.backforward()
    } else if (receivedNumber == 3) {
        cuteBot.forward()
    } else if (receivedNumber == 2) {
        cuteBot.stopcar()
    } else if (receivedNumber == 5) {
        cuteBot.motors(76, 100)
    } else if (receivedNumber == 4) {
        cuteBot.motors(76, 100)
    }
})
radio.setGroup(1)
