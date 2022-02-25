import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ContainerButtonMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  .btnMore {
    width: 100%;
    padding: 20px;
    cursor: pointer;
    background: #ef1721;
    font-size: 1.4rem;
  }
`;
