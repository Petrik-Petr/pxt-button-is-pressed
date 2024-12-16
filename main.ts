input.onButtonPressed(Button.A, function () {
    music.setVolume(180)
    music.ringTone(Note.C)
    pause(50)
    music.stopAllSounds()
})
