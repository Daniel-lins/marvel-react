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

export function Series() {
  const [series, setSeries] = useState<ResponseData[]>([]);

  const handleMore = useCallback(async () => {
    try {
      const offset = series.length;
      const response = await api.get("series", {
        params: {
          offset,
        },
      });
      setSeries([...series, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [series]);

  useEffect(() => {
    api
      .get("/series")
      .then((response) => setSeries(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Theme>
      <Container>
        {series.map((c) => (
          <CardList
            key={c.id}
            id={c.id}
            name={c.title}
            description={c.description}
            thumbnail={c.thumbnail}
          />
        ))}{" "}
      </Container>{" "}
      <ContainerButtonMore>
        <button className="btnMore" type="button" onClick={handleMore}>
          More{" "}
        </button>{" "}
      </ContainerButtonMore>
    </Theme>
  );
}
