//css styles for Navbar.
import { main_btns } from "./MainCss";
import bgImg from "../images/nav-bg.png";

const NavbarCss = {
  nav_root: {
    flexGrow: 1,
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover"
    // background: "#2196F3"
  },
  nav_Brand: {
    flexGrow: 1,
    marginLeft: "2rem"
  },
  logo: {
    height: "50px",
    width: "50px"
  },
  nav_buttons: {
    marginRight: "2rem"
  },
  nav_btn: main_btns,
  bg_inherit: {
    background: "inherit"
  }
};

export default NavbarCss;
