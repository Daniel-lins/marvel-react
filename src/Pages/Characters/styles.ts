import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgb(0, 0, 0, 0.3);

  h2,
  p {
    padding: 5px;
    text-align: justify;
  }

  &:hover {
    div#img {
      height: 100px;
    }
  }
`;

export const ButtomMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #f1f1f1;
  height: 40px;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin: 20px auto;

  padding: 0 50px;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background: #ec1d24;
  }
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
