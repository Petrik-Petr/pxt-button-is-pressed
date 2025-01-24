let A = 1
basic.forever(function(){
    if (A === 1)
        if (input.buttonIsPressed(Button.A) === true){
            music.setVolume(255)
            music.ringTone(Note.C)
            basic.pause(200)
            music.setVolume(0)
            A = 0
        }
    
    if (A === 0){
        if (input.buttonIsPressed(Button.A) === false){
            A = 1
        }
    }
})
