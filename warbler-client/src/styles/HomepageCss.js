import { main_btns } from "./MainCss";
import Image from "../images/warbler-hero.jpg";

export default theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    ...theme.mixins.gutters(),
    margin: "1rem",
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
    backgroundSize: "cover"
  },
  hero: {
    position: "relative"
  },
  hero_item: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-223.725px",
    marginTop: "124px"
  },
  hero_text: {
    color: "white",
    fontWeight: "bold",
    textShadow: "5px 0 8px black"
  },
  btn: main_btns
});
