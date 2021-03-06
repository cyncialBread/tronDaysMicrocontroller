input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    begin = true
    pause(200)
    for (let index = 0; index <= 9; index++) {
        pause(200)
        light.setPixelColor(index, 0x00ff00)
    }
    for (let index = 0; index < 2; index++) {
        light.showRing(
        `black black black black black black black black black black`
        )
        control.waitMicros(50)
        light.showRing(
        `green green green green green green green green green green`
        )
        control.waitMicros(50)
    }
    makerController.player1.setAnalogThreshold(ArcadeAnalogButton.LeftRight, -500, 500)
    control.waitMicros(50)
    makerController.player1.setAnalogThreshold(ArcadeAnalogButton.DownUp, -500, 500)
    while (true) {
        makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
        control.waitMicros(50)
        makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, input.acceleration(Dimension.Y))
        control.waitMicros(50)
    }
})
let begin = false
while (!(begin)) {
    light.showRing(
    `white white white white white white white white white white`
    )
    pause(100)
    light.showRing(
    `black black black black black black black black black black`
    )
    pause(100)
}
