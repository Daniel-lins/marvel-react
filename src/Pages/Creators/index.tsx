import { useCallback, useEffect, useState } from "react";

import CardList from "../../components/CardList";
import Theme from "../../components/Theme";
import api from "../../services/api";
import { Container, ContainerButtonMore } from "./styles";

type ResponseData = {
  id: string;
  firstName: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
export function Creators() {
  const [creators, setCreators] = useState<ResponseData[]>([]);

  const handleMore = useCallback(async () => {
    try {
      const offset = creators.length;
      const response = await api.get("creators", {
        params: {
          offset,
        },
      });
      setCreators([...creators, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [creators]);

  useEffect(() => {
    api
      .get("/creators")
      .then((response) => setCreators(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Theme>
      <Container>
        {creators.map((c) => (
          <CardList
            key={c.id}
            id={c.id}
            name={c.firstName}
            description={c.description}
            thumbnail={c.thumbnail}
          />
        ))}{" "}
      </Container>
      <ContainerButtonMore>
        <button className="btnMore" type="button" onClick={handleMore}>
          More{" "}
        </button>{" "}
      </ContainerButtonMore>
    </Theme>
  );
}
