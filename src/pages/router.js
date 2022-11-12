import Home01 from "./Home01";
import Test from "./Test";
import Scoreboard from "./Scoreboard";

const routes = [
  { path: "/", component: <Home01 /> },
  { path: "/wxba-test", component: <Test /> },
  { path: "/scoreboard", component: <Scoreboard /> }, 
];

export default routes;
