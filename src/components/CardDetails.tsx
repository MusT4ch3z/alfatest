import React from "react";
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Skeleton,
   Typography,
} from "@mui/material";
import { Delete, Favorite } from "@mui/icons-material";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { useAppDispatch } from "../hooks/redux";
import {
   deletePokemon,
   switchLike,
} from "../features/pokemonStore/pokemonStoreSlice";
import { useAppSelector } from "../hooks/redux";
const _ = require("lodash");

export interface CustomCardProps {
   name: string;
   like: boolean;
}

const CardDetails: React.FC<CustomCardProps> = ({ name, like }) => {
   const dispatch = useAppDispatch();
   const { data, isLoading } = useGetPokemonByNameQuery(name);
   const isLikeFiltered = useAppSelector(
      (state) => state.likeFilter.filterIsActive
   );

   const likeHandle = () => {
      dispatch(switchLike(name));
   };

   const deleteHandle = () => {
      dispatch(deletePokemon(name));
   };
   return (
      <div className="flex justify-center items-center h-screen">
         <Card sx={{ maxWidth: 300, maxHeight: 720, width: 300 }}>
            <CardContent>
               <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
               >
                  {_.upperFirst(name)}
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
                     alt={name}
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
