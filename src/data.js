// Internal imports
import clap from "./FCC_audio/Clap.mp3";
import closedHH from "./FCC_audio/Closed-HH.mp3";
import heater1 from "./FCC_audio/Heater-1.mp3";
import heater2 from "./FCC_audio/Heater-2.mp3";
import heater3 from "./FCC_audio/Heater-3.mp3";
import heater4 from "./FCC_audio/Heater-4.mp3";
import kick from "./FCC_audio/Kick.mp3";
import kickNHat from "./FCC_audio/Kick_n_Hat.mp3";
import openHH from "./FCC_audio/Open-HH.mp3";

export const data = [
  {
    id: 0,
    desc: "Heater 1",
    file: heater1,
    key: "Q"
  },
  {
    id: 1,
    desc: "Heater 2",
    file: heater2,
    key: "W"
  },
  {
    id: 2,
    desc: "Heater 3",
    file: heater3,
    key: "E"
  },
  {
    id: 3,
    desc: "Heater 4",
    file: heater4,
    key: "A"
  },
  {
    id: 4,
    desc: "Clap",
    file: clap,
    key: "S"
  },
  {
    id: 5,
    desc: "Kick",
    file: kick,
    key: "D"
  },
  {
    id: 6,
    desc: "Closed High Hat",
    file: closedHH,
    key: "Z"
  },
  {
    id: 7,
    desc: "Open High Hat",
    file: openHH,
    key: "X"
  },
  {
    id: 8,
    desc: "Kick 'n' Hat",
    file: kickNHat,
    key: "C"
  }
];
