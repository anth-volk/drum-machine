
import styled from "styled-components";
import { Knob } from "../styles.js";

export const Metronome = styled(Knob)`
  grid-area: metronome;
  transform: rotate(${props => props.rotFactor}deg);
`;