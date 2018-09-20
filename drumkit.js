//start your code on line two.  And make sure it isnt trash.















// write your code above ignore everything below the lines of seperation
// -------------------------------------------------lines-------------------------------------------------------------------
//----------------------------------------------------of--------------------------------------------------------------------
//-----------------------------------------------seperation-----------------------------------------------------------------

    //function is for clipping a sound that may already be playing so you can press the key rapidly and always have a sound play.
cutSoundBiteOnKeyPress = (sound) => {
    if (sound.currentTime !== 0){
        sound.currentTime = 0;
    }
}

// This function is for handling your keypresses.  Please do not touch this function or you will break your functionality
    document.addEventListener('keypress', (event) => {
        switch (event.keyCode) {
            case 115 : playSnareDrum();
                break;
            case 107: playKickDrum();
                break;
            case 104 : playHighHat(); 
        }
    })