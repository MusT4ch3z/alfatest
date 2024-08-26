import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CardDetails from "../components/CardDetails";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "pokemons/:pokemonName",
      element: <CardDetails />,
   },
]);
