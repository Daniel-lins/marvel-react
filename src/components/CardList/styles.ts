import styled from "styled-components";

type thumbnailData = {
  thumbnail: {
    path: string;
    extension: string;
  };
};

const urlImg = (props: thumbnailData) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`;
export const Container = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgb(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5b595c;
  div#img {
    height: 400px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;

    transition: all 0.8s;
  }
  .ButonCard {
    padding: 10px 50px;
    cursor: pointer;
    background: #ef1721;
    font-weight: bold;
    font-size: 18px;
    border-radius: 0 0 10px 10px;
  }
  .Modal {
  }
`;

export const ContainerModal = styled.div`
  max-width: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  text-align: center;

  p {
    padding: 10px;
  }

  img {
    max-width: 600px;
    height: 350px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  button {
    padding: 10px 90px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    background-color: #ef1721;
    font-weight: bold;
  }
`;
