import { useCallback, useEffect, useState } from "react";

import api from "../../services/api";
import { Container, Card, CardList, ButtomMore } from "./styles";

type ResponseData = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

function Characters() {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });
      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => setCharacters(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(characters);

  return (
    <Container>
      <h1>Characters</h1>
      <CardList>
        {characters.map((characters) => {
          return (
            <Card key={characters.id} thumbnail={characters.thumbnail}>
              <div id="img" />

              <h2>{characters.name}</h2>
              <p>{characters.description}</p>
            </Card>
          );
        })}
      </CardList>
      <ButtomMore onClick={handleMore}>Mais</ButtomMore>
    </Container>
  );
}

export default Characters;
