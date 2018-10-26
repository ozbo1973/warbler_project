import { main_background, main_btns } from "./MainCss";

export default theme => ({
  messageTimeline_root: {
    height: "100vh"
  },
  messageTimeline_bg: main_background,
  messageTimeline_messageList: {
    flexGrow: 1,
    maxWidth: "65%"
  },
  btn: main_btns
});
