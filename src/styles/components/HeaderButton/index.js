import styled from "styled-components";

export const HeaderButtonS = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 1rem;
  height: 40px;
  background: var(--grey3);
  border-radius: 4px;

  font-weight: 600;
  font-size: 12px;
  line-height: 237%;
  text-align: center;
  color: var(--grey0);

  :hover {
    background: var(--grey2);
  }
`;
