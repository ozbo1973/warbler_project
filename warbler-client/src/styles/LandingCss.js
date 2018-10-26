import { main_btns } from "./MainCss";
import Image from "../images/warbler-hero.jpg";

export default theme => ({
  landing_root: {
    flexGrow: 1,
    textAlign: "center",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    height: "100vh",
    padding: "0"
  },
  hero_item: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-223.725px",
    marginTop: "-124px"
  },
  hero_text: {
    color: "white",
    fontWeight: "bold",
    textShadow: "5px 0 8px black"
  },
  btn: main_btns
});
