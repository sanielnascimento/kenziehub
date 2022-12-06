import styled from "styled-components";

export const HomeS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3%;
  width: 100%;
  height: 100vh;
  background: var(--grey4);
  color: var(--grey0);

  header {
    border-bottom: 1px solid var(--grey2);
  }

  .UserInfoBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--grey2);
  }

  .UserInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
  }

  .UserInfo > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 180%;
    color: var(--grey1);
  }


  .MainContent{
    display: flex;
    width: 100%;
  }

  .AppStatus {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 38px;
    gap: 24px;
    width: 100%;
  }

  .AppStatus > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--white);
  }

  .HomeHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
  }
`;
