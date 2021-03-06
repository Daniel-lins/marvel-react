import { useCallback, useEffect, useState } from "react";

import CardList from "../../components/CardList";
import Theme from "../../components/Theme";
import api from "../../services/api";
import { Container, ContainerButtonMore } from "./styles";

type ResponseData = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function Characters() {
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

  return (
    <Theme>
      <Container>
        {characters.map((c) => (
          <CardList
            key={c.id}
            id={c.id}
            name={c.name}
            description={c.description}
            thumbnail={c.thumbnail}
          />
        ))}
      </Container>
      <ContainerButtonMore>
        <button className="btnMore" type="button" onClick={handleMore}>
          More{" "}
        </button>{" "}
      </ContainerButtonMore>
    </Theme>
  );
}
