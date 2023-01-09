
// Internal imports
import * as S from './MetronomeStyles.js';
import audio from '../FCC_audio/Metronome-Click.mp3';

export default function Metronome({clickHandler, level}) {

  return (
    <S.Metronome onClick={clickHandler} rotFactor={level}>
      <audio src={audio} id="metronomeAudio" />
    </S.Metronome>
  )

}