import styled from "styled-components";

export const InputS = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  height: 48px;
  background: var(--grey2);
  border: 1px solid var(--grey2);
  border-radius: 4px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 163%;

  ::placeholder {
    color: var(--grey1);
  }

  :focus,
  :hover {
    border: 1px solid var(--grey0);
  }
`;
