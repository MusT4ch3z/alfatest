import { Button, Container } from "@mui/material";
import CustomCard from "./components/CustomCard";
import { useGetPokemonsQuery } from "./services/pokemonApi";
import { switchFilter } from "./features/like/likeFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./features/pokemonStore/pokemonStoreSlice";
import { useEffect } from "react";

const _ = require("lodash");

function App() {
   const { data, isSuccess } = useGetPokemonsQuery();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setPokemons(data?.results));
   }, [data?.results, dispatch]);
   const store = useSelector((state: any) => state.pokemonStore);
   console.log(store);

   const switchFilterHandler = () => {
      dispatch(switchFilter());
   };

   return (
      <>
         <Container
            maxWidth="lg"
            className="py-20 flex-col justify-center items-center"
            sx={{
               display: "flex",
            }}
         >
            <Button variant="outlined" onClick={switchFilterHandler}>
               Показать только понравившиеся
            </Button>

            <div className="flex justify-center gap-3 py-5 flex-wrap ">
               {!_.isEmpty(store) &&
                  store.map(
                     (pokemon: {
                        name: string;
                        url: string;
                        like: boolean;
                     }) => (
                        <CustomCard
                           key={pokemon.name}
                           name={pokemon.name}
                           like={pokemon.like}
                           // pokemonUrl={pokemon.url}
                           // imgUrl="https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif"
                           // content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quos."
                        />
                     )
                  )}
            </div>
         </Container>
      </>
   );
}

export default App;
