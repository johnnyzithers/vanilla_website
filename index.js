/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
  var params = {};
  var parser = document.createElement("a");
  parser.href = url || window.location.href;
  var query = parser.search.substring(1);
  var vars = query.split("&");
  if (vars.length < 1) return params;
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return params;
};

var params = getParams();

var data = {
  music: [
    {
      image: "5-jz1.png",
      title: 'Johnny Zithers - "XXVII"',
      url: "https://johnnyzithers.bandcamp.com/album/xxvii",
      contributions: ["vocals", "guitar", "keyboards"],
    },
    {
      image: "6-jz2.png",
      title: 'Johnny Zithers - "Hi World"',
      url: "https://johnnyzithers.bandcamp.com/album/hi-world",
      contributions: ["vocals", "guitar", "keyboards"],
    },
    {
      image: "2-if1.png",
      title: 'Iceberg Ferg - "Waiting On"',
      url: "https://icebergferg.bandcamp.com/album/waiting-on",
      contributions: ["recording", "production", "guitar"],
    },
    {
      image: "3-if2.png",
      title: 'Iceberg Ferg - "In The Valley Of The Purple Prince"',
      url:
        "https://crowncrowncrown.bandcamp.com/album/in-the-valley-of-the-purple-prince",
      contributions: ["recording", "production"],
    },
    {
      image: "4-if3.png",
      title: 'Iceberg Ferg - "Let It Grow"',
      url: "https://crowncrowncrown.bandcamp.com/album/let-it-grow",
      contributions: ["recording", "production"],
    },
    {
      image: "1-fas.png",
      title: 'Fascination - "Fascination"',
      url: "https://fascinati0n.bandcamp.com/releases",
      contributions: ["vocals", "guitar"],
    },
    {
      image: "13-freak-heat-waves.png",
      title: 'Freak Heat Waves - "Freak Heat Waves"',
      url: "https://freakheatwaves.bandcamp.com/album/freak-heat-waves",
      contributions: ["mix engineering"], 
    },
    {
      image: "10-south1.png",
      title: 'Southwoods - "1"',
      url: "https://southwoods.bandcamp.com/album/southwoods",
      contributions: [
        "guitar",
        "homemade instruments",
        "recording",
        "production",
      ],
    },
    {
      image: "11-south2.png",
      title: 'Southwoods - "2"',
      url: "https://southwoods.bandcamp.com/album/southwoods-2",
      contributions: [
        "guitar",
        "homemade instruments",
        "recording",
        "production",
      ],
    },
    {
      image: "12-south3.png",
      title: 'Southwoods - "3"',
      url: 'https://southwoods.bandcamp.com/album/southwoods-3',
      contributions: [
        "guitar",
        "homaemade instruments",
        "recording",
        "production",
      ],
    },
    {
      image: "0-ccc.png",
      title: 'COBRAS COBRAS COBRAS - "COBRAS"',
      url: "https://cobras.bandcamp.com/",
      contributions: ["vocals", "guitar"],
    },
    {
      image: "7-sd1.png",
      title: 'Slam Dunk - "The Shivers"',
      url: "https://slamdunk.bandcamp.com/album/the-shivers",
      contributions: ["vocals", "guitar", "keyboards"],
    },
    {
      image: "8-sd2.png",
      title: 'Slam Dunk - "Welcome To Miami"',
      url: "https://slamdunk.bandcamp.com/album/welcome-to-miami",
      contributions: ["vocals", "guitar", "keyboards"],
    },
    {
      image: "9-sd3.png",
      title: 'Slam Dunk - "In Hell"',
      url: "https://slamdunk.bandcamp.com/album/in-hell-2",
      contributions: ["vocals", "guitar", "keyboards"],
    },
  ],
  instruments: [
    {
      image: "3-bass-island.png",
      name: "bass island",
      url: "https://www.instagram.com/p/B2hWwUNlkag",
      type: "pattern generating bass synth",
      description:
        "Just click that switch and you are generously rewarded with a new funky bass line, BOOING! Perfect if you’ve recently moved away from all your bass playing friends. Controls adjust pattern length, tempo, ASDR of bass synth.  ",
    },
    {
      image: "0-big-dumb-mountain.png",
      name: "big dumb mountain",
      url: "https://www.instagram.com/p/BjoDsvJD5SV",
      type: "pitch tracked reverb audio effect",
      description:
        "Pitch estimation is performed on incoming audio, producing a control signal which is applied to the reverb mix. Controls include reverb volume, dry volume and low and high frequency cutoffs to determine the frequency range where the effect is applied.",
    },
    {
      image: "2-grainm.png",
      name: "grainm",
      url: "https://www.instagram.com/p/BhIg2iZj_5w",
      type: "granular synthesizer and sampler",
      description:
        "Sample pads trigger percussion samples, which can be triggered at different playback rates and with different loop points. Granular synthesizer drone accompanies the sampler, with controllable volume, grain playback position, grain pitch, and grain sample.",
    },
    {
      image: "1-horsechords.png",
      name: "horse chords",
      url: "https://www.instagram.com/p/B2PT5Ggl-FH",
      type: "chord following theremin synthesizer",
      description:
        "Chord recognition is performed on incoming audio, which sets the tonality of notes being synthesized. Interaction with light dependent resistors triggers tones synthesized and passed through an envelope. Controls present for light detection threshold and mix of synth output and chord input volume.",
    },
    {
      image: "6-centro.gif",
      name: "centrophone",
      url: "",
      type: "audio feature organized sampler",
      description:
        "On power on, Centrophone draws 12 random audio samples on the device. Feature analysis is computed, and the samples are mapped to the keyboard in order of ascending values of the chosen feature. Audio features supported for the ordering of samples include spectral centroid, spectral flux, and RMS energy.",
    },
    {
      image: "4-2tones.png",
      name: "2 tones",
      url: "https://www.instagram.com/p/BVkiO33jZSV",
      type: "dual oscillator AM/FM synthesizer",
      description:
        "Two oscillators can be combined using additive or frequency modulated synthesis. Frequency and amplitude of each oscillator can be controlled, and fine modulation can be achieved through interaction with the light dependent resistor.",
    },
    {
      image: "7-hanging-drone.gif ",
      name: "hanging drone",
      url: "https://www.instagram.com/p/BqjhWO7B-SG",
      type: "pendulum LFO MIDI controller",
      description:
        "Sensor data is processed on the device to derive the pendulums horizontal and vertical position and velocity, which are output as separate MIDI control change messages.",
    },
    {
      image: "5-geo-seq.png",
      name: "geoseq",
      url: "",
      type: "geometric drum sequencer",
      description:
        "Softrware drum machine which supports circular sequence editing. Cyclical sequencing makes visible additional information pertaining to sequence timing. MIDI input and output is also supported.",
    },
  ],
  videos: [
    '<iframe width="480" height="320" src="https://www.youtube-nocookie.com/embed/jtGZChXCKFw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="480" height="320" src="https://www.youtube.com/embed/2qxOmbaJjh4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="480" height="320" src="https://www.youtube.com/embed/o4Nza7o8PUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="480" height="320" src="https://www.youtube.com/embed/NxG5SNX0TTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="480" height="320" src="https://www.youtube.com/embed/4Arue2zHeWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ],
  workshops: [
    {
      image: "work0.jpg",
      title: "Build Your Own MIDI Instrument / Digital Synthesizer Workshop",
      description:
        "Participants took place in a two day workshop designed to teach the fundamental concepts and technologies required to design and build new MIDI controller and digital synthesizer instruments. Instrument design techniques, user interaction, and musical performance techniques were discussed within the context of traditional, modern, and experimental music instrument design. Participants left with a new instrument they designed and built themselves.",
    },
    {
      image: "work0.png",
      title: "Build Your Own Capacitive Touch MIDI Instrument",
      description:
        "This workshop centered around exploring the possible configurations of copper tape to capacitively sense interaction on custom designed MIDI controllers. Participants learned the fundamentals of the technologies required to design, build, and construct new MIDI instruments; electronics, digital hardware, programming, and interaction design. Participants also created a custom MIDI controller during the course of the workshop.",
    },
  ],
  papers: [
    {
      title: "Reconfigurable autonomous novel guitar effects (RANGE)",
      url:
        "https://www.researchgate.net/publication/310644845_Reconfigurable_Autonomous_Novel_Guitar_Effects_RANGE",
      credits: "MacConnell, Trail, Tzanetakis, Driessen, Page",
      description:
        "The RANGE guitar is a minimally-invasive hyperinstrument incorporating electronic sensors and integrated digital signal processing (DSP). It introduces an open framework for autonomous music computing eschewing the use of the laptop on stage. The framework uses an embedded Linux microcomputer to provide sensor acquisition, analog-to-digital conversion (ADC) for audio input, DSP, and digital-to-analog conversion (DAC) for audio output. The DSP environment is built in Puredata (Pd). We chose Pd because it is free, widely supported, flexible, and robust. The sensors we selected can be mounted in a variety of ways without compromising traditional playing technique. Integration with a conventional guitar leverages established techniques and preserves the natural gestures of each player’s idiosyncratic performing style. The result is an easy to replicate, reconfigurable, idiomatic sensing and signal processing system for the electric guitar requiring little modification of the original instrument.",
    },
    {
      title:
        "Seeing Sound: Investigating the Effects of Visualizations and Complexity on Crowdsourced Audio Annotations",
      url: "http://faculty.poly.edu/~onov/Cartwright_et_al_SONYC_CSCW_2017.pdf",
      credits:
        "Cartwright, Salamon, Mikloska, Law, Nov, Seals, Williams, MacConnell, Bello",
      description:
        "Audio annotation is key to developing machine-listening systems; yet, effective ways to accurately and rapidly obtain crowdsourced audio annotations is understudied. In this work, we seek to quantify the reliability/redundancy trade-o in crowdsourced soundscape annotation, investigate how visualizations a ect accuracy and e ciency, and characterize how performance varies as a function of audio characteristics. Using a controlled experiment, we varied sound visualizations and the complexity of soundscapes presented to human annotators. Results show that more complex audio scenes result in lower annotator agreement, and spectrogram visualizations are superior in producing higher quality annotations at lower cost of time and human labor. We also found recall is more a ected than precision by soundscape complexity, and mistakes can be often attributed to certain sound event characteristics. These ndings have implications not only for how we should design annotation tasks and interfaces for audio data, but also how we train and evaluate machine-listening systems.",
    },
    {
      title: "scaper: A Library For Soundscape Synthesis and Augmentation",
      url: "",
      credits: "Salamon, MacConnell, Cartwright, Li, Bello",
      description:
        "Sound event detection (SED) in environmental recordings is a keytopic of research in machine listening, with applications in noisemonitoring for smart cities, self-driving cars, surveillance, bioacousticmonitoring, and indexing of large multimedia collections.Developing new solutions for SED often relies on the availability ofstrongly labeled audio recordings, where the annotation includes theonset, offset and source of every event. Generating such precise annotationsmanually is very time consuming, and as a result existingdatasets for SED with strong labels are scarce and limited in size.To address this issue, we present Scaper, an open-source library forsoundscape synthesis and augmentation. Given a collection of isolatedsound events, Scaper acts as a high-level sequencer that cangenerate multiple soundscapes from a single, probabilistically defined,“specification”. To increase the variability of the output, Scapersupports the application of audio transformations such as pitchshifting and time stretching individually to every event. To illustratethe potential of the library, we generate a dataset of 10,000 soundscapesand use it to compare the performance of two state-of-the-artalgorithms, including a breakdown by soundscape characteristics.We also describe how Scaper was used to generate audio stimuli foran audio labeling crowdsourcing experiment, and conclude with adiscussion of Scaper’s limitations and potential applications.",
    },
    {
      title:
        "El-Lamellophone - An Open Framework for Low-cost, DIY, Autonomous Lemellophone Based Hyperinstruments",
      url: "https://www.nime.org/proceedings/2014/nime2014_492.pdf",
      credits: "MacConnell, Trail, Tzanetakis, Jenkins",
      description:
        'The El-Lamellophone is a Lamellophone hyperinstrument incorporating electronic sensors and integratedDSP. An embedded Linux micro-computer supplants thelaptop. A piezo-electric pickup is mounted to the underside of the body of the instrument for direct audio acquisition providing a robust signal with little interference. Thesignal is used for electric sound-reinforcement, creative signal processing and audio analysis developed in Puredata(Pd). This signal inputs and outputs the micro-computervia stereo 1/8th inch phono jacks. Sensors provide gesture recognition affording the performer a broader, more dynamic range of "musical human-computer interaction"(MHCI)over specific DSP functions. The instrument\'s metal tines(conventionally used for plucking- traditional lamellophonesound production method) tines have been adapted to include capacitive touch in order to control a synthesizer. Initial investigations have been made into digitally-controlledelectromagnetic actuation of the acoustic tines, aiming toallow performer control and sensation via both traditionalLamellophone techniques, as well as extended playing techniques that incorporate shared human/computer control ofthe resulting sound. The goal is to achieve this without compromising the traditional sound production methods of theacoustic instrument while leveraging inherent performancegestures with embedded continuous controller values essential to MHCI. The result is an intuitive, performer designed,hybrid electro-acoustic instrument, idiomatic computer interface, and robotic acoustic instrument in one framework.',
    },
    {
      title: "STARI: A self tuning auto-monochord robotic instrument",
      url: "https://ieeexplore.ieee.org/document/6625511",
      credits: "MacConnell, Trail",
      description:
        "This paper outlines the motivation, design and developmentof a self-tuning, robotic monochord. This work presentsa portable, autonomous musical robotic string instrumentintended for creative and pedagogical use. Detailed testsperformed to optimize technical aspects of STARI are describedto highlight usability and performance specificationsfor artists and educators. STARI is intended to beopen-source so that the results are reproducible and expandableusing common components with minimal financialconstraints. Because the field of musical robotics is sonew, standardized systems need to be designed from existingparadigms. Such paradigms are typically singular innature, solely reflecting the idiosyncrasies of the artist andoften difficult to reproduce. STARI is an attempt to standardizecertain existing actuated string techniques in orderto establish a formal system for experimentation and pedagogy.",
    },
  ],
  contact: "duncanmacconnell@gmail.com",
};

var homeTemplate = function () {
  return (
    '<img src="./assets/mirror.jpg"/>'
  );
};

var musicTemplate = function () {
  return (
    '<ul class="music-list">' +
    data.music
      .map(function (item) {
        var { image, title, url, contributions } = item;
        return (
          "<li>" +
          '<img src="./assets/' +
          image +
          '" />' +
          '<a class="title" href="' +
          url +
          '" target="_blank">' +
          title +
          "</a>" +
          '<ul class="contributions">' +
          contributions
            .map(function (contribution) {
              return "<li>" + contribution + "</li>";
            })
            .join("") +
          "</ul>" +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
};

var instrumentsTemplate = function () {
  return (
    '<ul class="instruments-list">' +
    data.instruments
      .map(function (item) {
        var { image, name, url, type, description } = item;
        return (
          "<li>" +
          '<img src="./assets/' +
          image +
          '" />' +
          '<a href="' +
          url +
          '" target="_blank">' +
          name +
          "</a>" +
          "<div>" +
          type +
          "</div>" +
          "<div>" +
          description +
          "</div>" +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
};

var videosTemplate = function () {
  return (
    '<ul class="videos-list">' +
    data.videos
      .map(function (video) {
        return "<li>" + video + "</li>";
      })
      .join("") +
    "</ul>"
  );
};

var workshopsTemplate = function () {
  return (
    '<ul class="workshops-list">' +
    data.workshops
      .map(function (item) {
        var { image, title, description } = item;
        return (
          "<li>" +
          '<img src="./assets/' +
          image +
          '" />' +
          '<div class="workshop-details">' +
          "<div>" +
          title +
          "</div>" +
          "<div>" +
          description +
          "</div>" +
          "</div>" +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
};

var papersTemplate = function () {
  return (
    '<ul class="papers-list">' +
    data.papers
      .map(function (item) {
        var { title, url, credits, description } = item;
        return (
          "<li>" +
          '<a href="' +
          url +
          '" />' +
          title +
          "</a>" +
          "<div><i>" +
          credits +
          "</i></div>" +
          "<div>" +
          description +
          "</div>" +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
};

var build = function () {
  
  var app = document.querySelector("#app");
  var pageParams = params["page"];

  if (pageParams === "home") {
    return (app.innerHTML = homeTemplate());
  }

  if (pageParams === "music") {
    return (app.innerHTML = musicTemplate());
  }

  if (pageParams === "instruments") {
    return (app.innerHTML = instrumentsTemplate());
  }

  if (pageParams === "videos") {
    return (app.innerHTML = videosTemplate());
  }

  if (pageParams === "workshops") {
    return (app.innerHTML = workshopsTemplate());
  }

  if (pageParams === "papers") {
    return (app.innerHTML = papersTemplate());
  }

  if (pageParams === "contact") {
    return (app.innerHTML = "<br><div>duncan macconnell @ gmail</div>");
  }
};



var events = function () {};

var init = function () {
  build();
  events();
};

init();
