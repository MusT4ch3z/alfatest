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
const _ = require("lodash");

export interface CustomCardProps {
   name: string;
   // pokemonUrl: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ name }) => {
   const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(name);
   return (
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
            <Button size="small">
               <Favorite className="text-red-500" />
            </Button>
            <Button size="small">
               <Delete color="primary" />
            </Button>
         </CardActions>
      </Card>
   );
};

export default CustomCard;
