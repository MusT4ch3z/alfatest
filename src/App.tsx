import { Button, Container } from "@mui/material";
import CustomCard from "./components/CustomCard";
import { useGetPokemonsQuery } from "./services/pokemonApi";

function App() {
   const { data, isLoading, isSuccess } = useGetPokemonsQuery();
   console.log(data, isLoading, isSuccess);

   return (
      <>
         <Container
            maxWidth="lg"
            className="py-20 flex-col justify-center items-center"
            sx={{
               display: "flex",
            }}
         >
            <Button variant="outlined">Показать только понравившиеся</Button>
            <div className="flex justify-center gap-3 py-5 flex-wrap ">
               {data?.results.map((pokemon: { name: string; url: string }) => (
                  <CustomCard
                     key={pokemon.name}
                     name={pokemon.name}
                     // pokemonUrl={pokemon.url}
                     // imgUrl="https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif"
                     // content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quos."
                  />
               ))}
            </div>
         </Container>
      </>
   );
}

export default App;
