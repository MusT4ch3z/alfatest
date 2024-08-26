import React from "react";
import {
   Button,
   Card,
   CardContent,
   CardMedia,
   Skeleton,
   Typography,
} from "@mui/material";

import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { useNavigate, useParams } from "react-router-dom";
const _ = require("lodash");

const CardDetails: React.FC<{}> = () => {
   const { pokemonName } = useParams();
   const navigate = useNavigate();
   const goBackHandler = () => navigate(-1);
   const { data, isLoading } = useGetPokemonByNameQuery(
      _.lowerFirst(pokemonName)
   );

   return (
      <div className="flex flex-col justify-center items-center h-screen">
         <Button
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            onClick={() => goBackHandler()}
         >
            Вернуться к списку покемонов
         </Button>
         <Card sx={{ maxWidth: 300, maxHeight: 720, width: 300 }}>
            <CardContent>
               <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
               >
                  {_.upperFirst(pokemonName)}
               </Typography>
               {isLoading ? (
                  <Skeleton
                     variant="rectangular"
                     animation="wave"
                     height={268}
                  />
               ) : (
                  <CardMedia
                     style={{ imageRendering: "pixelated" }}
                     component="img"
                     alt={pokemonName}
                     height="140"
                     width="140"
                     image={data?.sprites.front_default}
                  />
               )}

               <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione fugit est cum praesentium dolorum ullam dolor quisquam
                  voluptatem, eligendi modi non quis? Rerum molestiae obcaecati
                  maiores, explicabo ducimus animi doloremque.
               </Typography>
            </CardContent>
         </Card>
      </div>
   );
};

export default CardDetails;
