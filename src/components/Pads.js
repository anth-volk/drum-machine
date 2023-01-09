// Internal imports
import * as S from './PadsStyles.js';
import { data } from '../data.js';

export default function Pads({clickHandler}) {
  
  // Generate JSX elements for drum pads
  // iteratively based on data.js
  const padsJSX = data.map((obj) => (
    <S.Pad key={obj.id} id={`Key${obj.key}`} onClick={clickHandler}>
      {obj.key}
      <audio src={obj.file} className="clip" id={obj.key} />
    </S.Pad>
  ));

  return (
    <>
      {padsJSX}
    </>
  )

}