import styled from "styled-components";

export const DisabledButtonS = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  width: 100%;
  height: 48px;
  background: var(--grey1);
  border: 1px solid var(--grey1);
  color: var(--grey0);
  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 165%;

  :hover {
    background: var(--grey2);
    border: 1px solid var(--grey2);
  }
`;
