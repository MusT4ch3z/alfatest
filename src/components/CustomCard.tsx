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
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { useDispatch, useSelector } from "react-redux";
import {
   deletePokemon,
   switchLike,
} from "../features/pokemonStore/pokemonStoreSlice";
import { useAppSelector } from "../hooks/redux";
const _ = require("lodash");

export interface CustomCardProps {
   name: string;
   like: boolean;
   // pokemonUrl: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ name, like }) => {
   const dispatch = useDispatch();
   const { data } = useGetPokemonByNameQuery(name);
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
      <>
         {isLikeFiltered && !like ? null : (
            <Card
               sx={{ maxWidth: 300, maxHeight: 420, height: 420, width: 300 }}
               className={"basis-1/3"}
            >
               <CardContent>
                  <Typography
                     gutterBottom
                     variant="h5"
                     component="div"
                     align="center"
                  >
                     {_.upperFirst(name)}
                  </Typography>
                  <CardMedia
                     style={{ imageRendering: "pixelated" }}
                     component="img"
                     alt={name}
                     height="140"
                     width="140"
                     image={data?.sprites.front_default}
                  />
                  <Typography
                     className=" overflow-hidden text-ellipsis whitespace-nowrap"
                     variant="body2"
                     color="text.secondary"
                  >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ratione fugit est cum praesentium dolorum ullam dolor
                     quisquam voluptatem, eligendi modi non quis? Rerum
                     molestiae obcaecati maiores, explicabo ducimus animi
                     doloremque.
                  </Typography>
               </CardContent>
               <CardActions className="flex justify-center ">
                  <Button size="small" onClick={likeHandle} sx={{ flex: 1 }}>
                     <Favorite
                        className={like ? "text-red-500" : "text-gray-500"}
                     />
                  </Button>
                  <Button size="small" onClick={deleteHandle} sx={{ flex: 1 }}>
                     <Delete color="primary" />
                  </Button>
               </CardActions>
            </Card>
         )}
      </>
   );
};

export default CustomCard;
