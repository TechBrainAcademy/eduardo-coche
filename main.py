def on_received_number(receivedNumber):
    if receivedNumber == 6:
        cuteBot.backforward()
        while receivedNumber == 6:
            cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
            cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
            basic.pause(500)
            cuteBot.closeheadlights()
            basic.pause(500)
            continue
    elif receivedNumber == 3:
        cuteBot.forward()
    elif receivedNumber == 2:
        cuteBot.stopcar()
    elif receivedNumber == 5:
        cuteBot.motors(76, 100)
    elif receivedNumber == 4:
        cuteBot.motors(76, 100)
radio.on_received_number(on_received_number)

radio.set_group(1)