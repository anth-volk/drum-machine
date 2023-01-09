
import styled from "styled-components";

// Individual elements

export const Pad = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  border-radius: 5px;
  font-size: calc(2 * var(--p-size));
  font-family: var(--p-font);
  color: var(--p-color);
  &.active,
  &:active {
    box-shadow: inset 0px 0px 16px 4px black;
  }
`;
