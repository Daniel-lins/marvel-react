import React, { useState } from "react";
import Modal from "react-modal";

import { Container, ContainerModal, ContainerButton } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Props = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

function Cardlist({ id, name, description, thumbnail }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container thumbnail={thumbnail}>
      <div id="img" />
      <button className="ButonCard" type="button" onClick={openModal}>
        {name}
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContainerButton>
          <button className="CloseCard" type="button" onClick={closeModal}>
            Close{" "}
          </button>{" "}
        </ContainerButton>

        <ContainerModal>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="hero" />
          <h2>{name}</h2>
          {description ? <p> {description}</p> : <p>No description found</p>}
        </ContainerModal>
      </Modal>
    </Container>
  );
}

export default Cardlist;
