import { Card, CardContent, Typography, CardActions, Box, CardMedia, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { FC } from "react";

const fontStyle = {
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "17px",
};

interface ProductCardProps {
  key: number;
  product_image: string;
  product_name: string;
  product_price: string;
  product_discount: string | null;
  product_rate: string;
  isAvailable: boolean;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        width: "350px",
        p: 1,
        boxShadow: "10px 20px 10px rgba(0,0,0,0.05)",
        opacity: props.isAvailable ? 1 : 0.5,
      }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            component='img'
            image={props.product_image}
            sx={{
              height: "237px",
              width: "220px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='h5' sx={{ fontStyle }}>
              {props.product_name}
            </Typography>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography variant='h6' sx={{ fontStyle, color: "#FFCE7F" }}>
                {props.product_price}₽
              </Typography>
              <Typography
                sx={{
                  color: props.product_discount ? "#FFCE7F" : "transparent",
                  textDecoration: "line-through",
                }}>
                {props.product_discount ? `${props.product_discount}₽` : `0₽`}
              </Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
              <StarIcon sx={{ color: "#FFCE7F" }} />
              <Typography component='p' sx={{ fontStyle, color: "#838383" }}>
                {props.product_rate}
              </Typography>
            </Box>
            <CardActions>
              <Link
                href='#'
                color='inherit'
                sx={{
                  fontStyle,
                  textDecoration: "none",
                  pointerEvents: props.isAvailable ? "auto" : "none",
                }}>
                Купить
              </Link>
            </CardActions>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
