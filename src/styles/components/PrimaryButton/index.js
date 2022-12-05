import styled from "styled-components";

export const PrimaryButtonS = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 22px;
  gap: 10px;
  width: 100%;
  height: 48px;
  background: var(--primary);
  border: 1px solid var(--primary);
  color: var(--white);
  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 165%;

  :hover {
    background: var(--primary-50);
    border: 1.2182px solid var(--primary-50);
  }
`;
