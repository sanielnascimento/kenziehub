import styled from "styled-components";

export const FormS = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 22px;
  gap: 22px;

  width: 100%;
  min-height: 502px;
  overflow-y: auto;
  background: var(--grey3);
  box-shadow: 0px 4px 40px -10px var(--shadow-grey);
  border-radius: 4px;

  .InputBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 22px;
    width: 100%;
  }
`;
