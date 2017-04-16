var title = "Star Sound Object";
var title2 = "Click to hear sound effect";
var img;
var osc;
var osc2;
var ampEnv;
var synth;
var synth2;
var oscNoise;
var ampEnvNoise;
var filt;
var lfo;
var dive;

function preload()
{
        img = loadImage("th.jpg");
}

function setup() {
                image(img, 0, 0);

                synth = new Tone.Synth({
                  oscillator: {
                    type: "triangle"
                  },
                  envelope: {
                    attack: 0.0,
                    decay: 0.1,
                    sustain: 0.2,
                    release: 1
                  }
                }).toMaster();

                oscNoise1 = new Tone.Noise().start();
                oscNoise = new Tone.Noise().start();
                filt = new Tone.Filter(2000,"lowpass");
                lfo = new Tone.LFO(10, -64, 0).start();
                lfo2 = new Tone.LFO(0, -64, 0).start();

                osc = new Tone.Oscillator(440, "triangle").start();
                osc2 = new Tone.Oscillator(660, "sawtooth6").start();
                osc2.volume.value = -90;

                ampEnv = new Tone.AmplitudeEnvelope({
                                "attack": 0.2,
                                "decay": 0.8,
                                "sustain": .02,
                                "release": 0.0
                }).toMaster();

                ampEnvNoise = new Tone.AmplitudeEnvelope({
                                "attack": 0.1,
                                "decay": 0.4,
                                "sustain": .01,
                                "release": 0.0
                }).toMaster();

                osc.frequency.value = 'Bb4';

                lfo.connect(oscNoise.volume);
                lfo2.connect(oscNoise1.volume);

                oscNoise.connect(ampEnv);
                oscNoise1.connect(ampEnvNoise);

                oscNoise1.connect(filt);
                oscNoise.connect(filt);
                filt.connect(ampEnvNoise);

}

function draw() {
                createCanvas(600, 400);
                background(255, 153, 103);
                textSize(15);
                text(title,10, 20);
                text(title2,10, 40);
                if (mouseIsPressed)
                {
                    image(img, 0, 0);
                    ampEnv.triggerAttackRelease(4,"+0.0");
                    synth.triggerAttackRelease("E5", 1);
                }
}


function mouseReleased()
{
    if (mouseReleased)
    {
        ampEnvNoise.triggerAttackRelease(1,"+0.0");
    }
}
