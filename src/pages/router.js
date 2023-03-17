import Home01 from "./Home01";
import Web3Test from "./Web3Test";
import ForexTest from "./ForexTest";
import Scoreboard from "./Scoreboard";

const routes = [
  { path: "/", component: <Home01 /> },
  { path: "/web3-test", component: <Web3Test /> },
  { path: "/forex-test", component: <ForexTest /> },
  { path: "/scoreboard", component: <Scoreboard /> }, 
];

export default routes;
