
import styled from "styled-components";
import { Knob } from "../styles.js";

export const Volume = styled(Knob)`
  grid-area: volume;
  transform: rotate(${props => props.rotFactor}deg);
`;