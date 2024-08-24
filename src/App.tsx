import { Button, Container } from "@mui/material";
import CustomCard from "./components/CustomCard";
import { useGetPokemonsQuery } from "./services/pokemonApi";
import { switchFilter } from "./features/like/likeFilterSlice";
import { useAppDispatch } from "./hooks/redux";
import { setPokemons } from "./features/pokemonStore/pokemonStoreSlice";
import { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";

const _ = require("lodash");

function App() {
   const { data } = useGetPokemonsQuery();
   const dispatch = useAppDispatch();
   // const cardListNode = document.getElementById("card-list");

   useEffect(() => {
      dispatch(setPokemons(data?.results));
   }, [data?.results, dispatch]);
   const store = useAppSelector((state) => state.pokemonStore);
   const isLikeFiltered = useAppSelector(
      (state) => state.likeFilter.filterIsActive
   );

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
            <Button
               variant={isLikeFiltered ? "contained" : "outlined"}
               onClick={switchFilterHandler}
            >
               Показать только понравившиеся
            </Button>

            <div
               id="card-list"
               className="flex justify-center gap-3 py-5 flex-wrap "
            >
               {/* {cardListNode?.childNodes.length === 0 ? (
                  <Typography>Ничего не найдено</Typography>
               ) : null} */}
               {!_.isEmpty(store) &&
                  store.map((pokemon: { name: string; like: boolean }) => (
                     <CustomCard
                        key={pokemon.name}
                        name={pokemon.name}
                        like={pokemon.like}
                     />
                  ))}
            </div>
         </Container>
      </>
   );
}

export default App;
