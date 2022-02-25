import { useCallback, useEffect, useState } from "react";

import CardList from "../../components/CardList";
import Theme from "../../components/Theme";
import api from "../../services/api";
import { Container, ContainerButtonMore } from "./styles";

type ResponseData = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
export function Comics() {
  const [comics, setComics] = useState<ResponseData[]>([]);

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get("comics", {
        params: {
          offset,
        },
      });
      setComics([...comics, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [comics]);

  useEffect(() => {
    api
      .get("/comics")
      .then((response) => setComics(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Theme>
      <Container>
        {comics.map((c) => (
          <CardList
            key={c.id}
            id={c.id}
            name={c.title}
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
