// External imports
import React, { useCallback, useEffect, useRef, useState } from "react";

// Internal imports
import * as S from "./styles.js";
import Display from "./components/Display.js";
import Metronome from "./components/Metronome.js";
import Pads from "./components/Pads.js";
import Volume from "./components/Volume.js";
import { data } from "./data.js";

export default function App() {
  const [display, setDisplay] = useState("");
  const [volumeLvl, setVolumeLvl] = useState(1.0);
  const [metronomeLvl, setMetronomeLvl] = useState(0);

  const currentAudio = useRef(null);
  const displayTimeout = useRef(null);
  const metronomeInterval = useRef(null);

  // Utility functions

  // Generate list of computer keys that 
  // user can press within app
  const keysAndDescs = data.reduce((accu, obj) => (
    {
      ...accu,
      [obj.key] : obj.desc
    }
  ), {});

  // Utility function that sets display, then clears it
  const displaySetter = (value) => {

    // If a timeout already exists, clear it
    if (displayTimeout.current) {
      clearTimeout(displayTimeout.current);
    }

    // Set display to passed value
    setDisplay(value);

    // Set display to empty string after fixed time
    displayTimeout.current = setTimeout(() => {
      setDisplay("");
    }, 2000);

  }

  const playAudio = useCallback((selectedLetter) => {

    // Select correct audio elem
    const audioElem = document.getElementById(selectedLetter);

    // If audio was played previously, pause and reset
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    // Play new audio and set currentAudio to new track
    audioElem.volume = volumeLvl;
    audioElem.play();
    currentAudio.current = audioElem;

    displaySetter(keysAndDescs[selectedLetter]);

  }, [currentAudio, keysAndDescs, volumeLvl]);


  // Controller logic

  // Handler for pad click events
  const handlePadClick = (e) => {
    const selectedLetter = e.target.innerText;
    playAudio(selectedLetter);
  }

  // Handler for metronome click events 
  const handleMetronomeClick = (e) => {
    if (metronomeLvl === 220) {
      setMetronomeLvl(0);
    }
    else {
      setMetronomeLvl( prevLvl => prevLvl + 20);
    }
  }

  // Handler for volume click events
  const handleVolumeClick = (e) => {

    if (volumeLvl === 0) {
      setVolumeLvl(1.0);
    }
    else {
      setVolumeLvl( prevLvl => prevLvl - 0.125);
    }
  }

  // Effect for displaying metronome updates  and playing audio after state update
  useEffect(() => {

    // Display change to metronome pace
    displaySetter(`Click: ${metronomeLvl} bpm`);
    
    // Access metronome audio elem
    const metronomeElem = document.getElementById("metronomeAudio");

    // Convert metronome bpm to play interval in ms
    let intervalMS = 0;
    if (metronomeLvl > 0) {
      intervalMS = 60000 / metronomeLvl ;
    }

    // Define interval function based on metronomeLvl
    if (metronomeLvl > 0) {
      metronomeElem.play();
      metronomeInterval.current = setInterval(() => {
        metronomeElem.play();
      }, intervalMS);
    }

    // Clean interval upon return
    return () => clearInterval(metronomeInterval.current);


  }, [metronomeLvl]);

  // Effect for dislpaying volume values after update of volumeLvl
  useEffect(() => {
    const volumeDisplayVal = volumeLvl * 100;
    displaySetter(`Volume: ${volumeDisplayVal}%`);

  }, [volumeLvl]);

  // Create global keydown and keyup handlers within useEffect to ensure 
  // compatibility with keydown event listener
  useEffect(() => {

    const handleKeydown = (e) => {
      const selectedLetter = e.key.toUpperCase();
      if (selectedLetter in keysAndDescs) {
        playAudio(selectedLetter);
        document.getElementById(`Key${selectedLetter}`).classList.add("active");
      }

    }

    const handleKeyup = (e) => {
      const selectedLetter = e.key.toUpperCase();
      if (selectedLetter in keysAndDescs) {
        document.getElementById(`Key${selectedLetter}`).classList.remove("active");
      }
    }

    // Create event listener for keydown and keyup
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);

    // Cleanup any explicitly declared
    // event listeners on unmount
    return function listenerCleanup() {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [keysAndDescs, playAudio]);


  return (
    <>
      <S.GlobalStyle />
      <S.App>
        <S.Title>React Drum Machine</S.Title>
        <S.DrumMachine id="drum-machine">
          <S.ControlsWrapper>
            <S.Logo>Volk 3P</S.Logo>
            <S.DisplayWrapper>
              <Display value={display}/>
            </S.DisplayWrapper>
            <Metronome clickHandler = {handleMetronomeClick} level = {metronomeLvl}/>
            <Volume clickHandler={handleVolumeClick} level={volumeLvl}/>
            <S.MetronomeLabel>Click</S.MetronomeLabel>
            <S.VolumeLabel>Volume</S.VolumeLabel>
          </S.ControlsWrapper>
          <S.PadsWrapper>
            <Pads clickHandler={handlePadClick}/>
          </S.PadsWrapper>
        </S.DrumMachine>
        <S.Attr>
          Created by{" "}
          <S.DefaultA href="http://www.github.com/anth-volk">
            Anthony Volk
          </S.DefaultA>
        </S.Attr>
      </S.App>
    </>
  );
}
