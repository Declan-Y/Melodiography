import MidiPlayer from "midi-player-js"

const MIDIPlayer = (file) => {

    const player = new MidiPlayer.Player((e) => {
        console.log(e)
    })

    player.loadArrayBuffer(file)
    player.play();



    
    
}
export default MIDIPlayer