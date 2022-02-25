import { ReactNode } from "react";

import Header from "../Header";
import { Container, Pages } from "./styles";

type Props = {
  children: ReactNode;
};

function Theme({ children }: Props) {
  return (
    <Container>
      <Header />

      <Pages>{children}</Pages>
    </Container>
  );
}
export default Theme;
