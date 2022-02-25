import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100px;
  background-color: #ef1721;
  flex: 1 2;
`;

export const ContainerLogo = styled.div`
  img {
    max-width: 300px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Navbar = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding-left: 150px;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SelectItem = styled.div`
  height: 40px;
  padding: 10px;
  background-color: #fffeff;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const TogleNavbar = styled.div<{ sidebar: boolean }>`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  
    }
    .navbar {
      .icon {
        justify-content: flex-end;
        height: 35px;
        width: 35px;
        cursor: pointer;
      }
    }

    ul {
      display: ${(props) => (props.sidebar ? "flex" : "none")};
      flex-direction: column;
      list-style: none;
      padding-top: 20px;
      gap: 0.3rem;
      font-size: 1.2rem;
      

      li {
        padding: 5px;
        opacity: 1;
       
      }
      li:hover {
        opacity: 0.8;
      }
    }
  }
`;
