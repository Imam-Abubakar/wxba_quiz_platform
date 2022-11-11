import Home01 from "./Home01";
import Collection from "./Collection";
import Item from "./ItemDetails";
import Test from "./Test";
import Explore from "./Explore02";
import Gallery from './Gallery';
import Form02 from "./Form02";

const routes = [
  { path: "/", component: <Home01 /> },
  { path: "/collection", component: <Collection /> },
  { path: "/wxba-test", component: <Test /> },
  { path: "/gallery", component: <Gallery /> }, 
  { path: "/form-academy", component: <Form02 />}, 
];

export default routes;
