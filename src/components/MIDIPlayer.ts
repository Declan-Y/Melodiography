import MidiPlayer from "midi-player-js"
import Soundfont from "soundfont-player"

const MIDIPlayer = (file) => {
    const ac = new AudioContext()

    Soundfont.instrument(ac, 'marimba').then((instrument) => {
    const player = new MidiPlayer.Player((e) => {
        if (e.name === 'Note on'){
            instrument.play(e.noteName, ac.currentTime, {gain:e.velocity/100, loop: true, attack: 0.1});


        }
    })

    player.loadArrayBuffer(file)
    player.play();
}
    )

    



    
    
}
export default MIDIPlayer