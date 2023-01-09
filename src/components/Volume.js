// Internal imports
import * as S from './VolumeStyles.js';

export default function Volume({clickHandler, level}) {

  let rotFactor = (100 - level * 100) / 100 * 240;

  return (
    <S.Volume onClick={clickHandler} rotFactor={rotFactor}/>
  )

}