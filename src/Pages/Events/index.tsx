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

export function Events() {
  const [events, setEvents] = useState<ResponseData[]>([]);

  const handleMore = useCallback(async () => {
    try {
      const offset = events.length;
      const response = await api.get("events", {
        params: {
          offset,
        },
      });
      setEvents([...events, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [events]);

  useEffect(() => {
    api
      .get("/events")
      .then((response) => setEvents(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Theme>
      <Container>
        {events.map((c) => (
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
