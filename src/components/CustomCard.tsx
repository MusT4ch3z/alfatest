import React from "react";
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from "@mui/material";
import { Delete, Favorite } from "@mui/icons-material";
import { IPokemon } from "../models/pokemon";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { useDispatch, useSelector } from "react-redux";
import {
   deletePokemon,
   switchLike,
} from "../features/pokemonStore/pokemonStoreSlice";
const _ = require("lodash");

export interface CustomCardProps {
   name: string;
   like: boolean;
   // pokemonUrl: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ name, like }) => {
   const dispatch = useDispatch();
   const { data } = useGetPokemonByNameQuery(name);
   const isLikeFiltered = useSelector(
      (state: any) => state.likeFilter.isLikeFiltered
   );

   const likeHandle = () => {
      dispatch(switchLike(name));
   };

   const deleteHandle = () => {
      dispatch(deletePokemon(name));
   };
   return (
      <>
         {isLikeFiltered && !like ? null : (
            <Card sx={{ maxWidth: 300 }} className="basis-1/3">
               <CardContent>
                  <Typography
                     gutterBottom
                     variant="h5"
                     component="div"
                     align="center"
                  >
                     {_.upperFirst(name)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {/* {content} */}
                  </Typography>
                  <CardMedia
                     style={{ imageRendering: "pixelated" }}
                     component="img"
                     alt={name}
                     height="140"
                     width="140"
                     image={data?.sprites.front_default}
                  />
               </CardContent>
               <CardActions>
                  <Button size="small" onClick={likeHandle}>
                     <Favorite className="text-red-500" />
                  </Button>
                  <Button size="small" onClick={deleteHandle}>
                     <Delete color="primary" />
                  </Button>
               </CardActions>
            </Card>
         )}
      </>
   );
};

export default CustomCard;
