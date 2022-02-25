import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsBook, BsFillBookmarkFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../../assets/pictures/marvel-logo.png";
import {
  Container,
  ContainerLogo,
  Navbar,
  SelectItem,
  TogleNavbar,
} from "./Styles";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container>
      <ContainerLogo>
        <img src={logo} alt="logo da marvel" />
      </ContainerLogo>
      <Navbar>
        <Link to="/">
          <SelectItem>
            <BiUser /> Characters{" "}
          </SelectItem>{" "}
        </Link>
        <Link to="/Comics">
          <SelectItem>
            {" "}
            <BsBook /> Comics{" "}
          </SelectItem>
        </Link>
        <Link to="/Creators">
          <SelectItem>
            <FiUsers /> Creators{" "}
          </SelectItem>
        </Link>
        <Link to="/Events">
          <SelectItem>
            <BsFillBookmarkFill /> Events{" "}
          </SelectItem>
        </Link>
        <Link to="/Series">
          <SelectItem>
            <MdLocalMovies /> Series{" "}
          </SelectItem>
        </Link>
      </Navbar>

      <TogleNavbar sidebar={sidebar}>
        <div className="navbar">
          <FaBars className="icon" onClick={showSidebar} />
        </div>
        <ul className="active">
          <li>
            {" "}
            <Link to="/">
              <BiUser /> Characters{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Comics">
              {" "}
              <BsBook /> Comics{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Creators">
              <FiUsers /> Creators{" "}
            </Link>
          </li>
          <li>
            <Link to="/Events">
              <BsFillBookmarkFill /> Events{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Series">
              <MdLocalMovies /> Series{" "}
            </Link>{" "}
          </li>
        </ul>
      </TogleNavbar>
    </Container>
  );
}

export default Header;
