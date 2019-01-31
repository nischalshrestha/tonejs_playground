

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C2", "8n");

// SCHEDULING
//schedule a series of notes, one per second
// synth.triggerAttackRelease('C4', 0.5, 0)
// synth.triggerAttackRelease('E4', 0.5, 1)
// synth.triggerAttackRelease('G4', 0.5, 2)
// synth.triggerAttackRelease('B4', 0.5, 3)

//schedule a series of notes to play as soon as the page loads
// synth.triggerAttackRelease('C4', '4n', '8n')
// synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'))
// synth.triggerAttackRelease('G4', '16n', '2n')
// synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'))
// synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t')*2)
// synth.triggerAttackRelease('E4', '2n', '0:3')

// //this function is called right before the scheduled time
// function triggerSynth(time){
// 	//the time is the sample-accurate time of the event
// 	synth.triggerAttackRelease('C2', '8n', time)
// }

// //schedule a few notes (this uses the bar:quarter:sixteenths encoding)
// Tone.Transport.schedule(triggerSynth, 0)
// //can do quote around time encoding as well
// // Tone.Transport.schedule(triggerSynth, '0')
// Tone.Transport.schedule(triggerSynth, '0:2')
// Tone.Transport.schedule(triggerSynth, '0:2:2.5')

// //set the transport to repeat
// Tone.Transport.loopEnd = '1m'
// // Tone.Transport.loop = true
// Tone.Transport.toggle()

// BPM
// var synth = new Tone.MetalSynth().toMaster();
// function triggerSynth(time){
// 	synth.triggerAttackRelease('16n', time)
// }

// Tone.Transport.schedule(triggerSynth, 0)
// Tone.Transport.schedule(triggerSynth, 2 * Tone.Time('8t'))
// Tone.Transport.schedule(triggerSynth, Tone.Time('4n') + Tone.Time('8t'))
// Tone.Transport.schedule(triggerSynth, Tone.Time('4n') + 2 * Tone.Time('8t'))
// Tone.Transport.schedule(triggerSynth, Tone.Time('0:2') + Tone.Time('8t'))
// Tone.Transport.schedule(triggerSynth, Tone.Time('0:3') + Tone.Time('8t'))

// Tone.Transport.loopEnd = '1m'
// Tone.Transport.loop = true
// Tone.Transport.toggle()
// Tone.Transport.bpm.value = 120

// LOOPS

// var synth = new Tone.MembraneSynth().toMaster()

// //create a loop
// var loop = new Tone.Loop(function(time){
// 	synth.triggerAttackRelease("C1", "8n", time)
// }, "4n")

// //play the loop between 0-2m on the transport
// loop.start(0).stop('2m')
// Tone.Transport.toggle()

// SHAPES 

// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes');
var params = { width: 285, height: 200 };
// var two = new Two(params).appendTo(document.body);
var two = new Two(params).appendTo(elem);   

// two has convenience methods to create shapes.
var circle = two.makeCircle(72, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);

// The object returned has many stylable properties:
circle.fill = '#FF8000';
circle.stroke = 'orangered'; // Accepts all valid css color
circle.linewidth = 5;

rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.75;
rect.stroke = '#1C75BC';
// rect.noStroke();
// Don't forget to tell two to render everything
// to the screen
two.update();

//attach a listener to the keyboard events
// elem.addEventListener('mousedown', e => {
//     console.log('hello');
//     synth.triggerAttack(261.63);
// })

// elem.addEventListener('mouseup', e => {
//     console.log('untrigger');
//     synth.triggerRelease();
// })

// var synth = new Tone.FMSynth().toMaster()



