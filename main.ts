basic.forever(function () {
    if (input.soundLevel() > 60) {
        basic.showString("安")
    } else {
        basic.showString("Hello!")
    }
})
