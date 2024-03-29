import { FC, useContext } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "@/logic/CardContext";
import { CartContext } from "@/logic/CardContext";

interface CartProductCardProps {
  product: {
    id: number;
    product_image: string;
    product_name: string;
    product_price: string;
  };
}

const boxStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export const CartProductCard: FC<CartProductCardProps> = ({ product }) => {
  const { removeFromCart, increaseProductQuantity, decreaseProductQuantity } = useCart();

  const cartProduct = useContext(CartContext).cart.find((p) => p.id === product.id);
  const productQuantity = cartProduct?.quantity ?? 1;

  const handleRemoveProduct = () => {
    removeFromCart(product.id);
  };

  return (
    <Card
      sx={{
        borderRadius: 5,
        width: "633px",
        pl: 2,
        pr: 1,
        boxShadow: "10px 20px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ boxStyles }}>
              <CardMedia
                component='img'
                image={product.product_image}
                sx={{
                  height: "136px",
                  width: "146px",
                  objectFit: "contain",
                }}
              />
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                disableSpacing>
                <IconButton
                  aria-label='remove item'
                  onClick={() => decreaseProductQuantity(product.id)}>
                  <RemoveCircleIcon fontSize='large' sx={{ color: "#FFCE7F" }} />
                </IconButton>
                <Typography>{productQuantity}</Typography>
                <IconButton
                  aria-label='add item'
                  onClick={() => increaseProductQuantity(product.id)}>
                  <AddCircleIcon fontSize='large' sx={{ color: "#FFCE7F" }} />
                </IconButton>
              </CardActions>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: 2,
              }}>
              <Typography variant='h5' component='h2'>
                {product.product_name}
              </Typography>
              <Typography color='textSecondary'>{product.product_price} ₽</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 20,
            }}>
            <Link onClick={handleRemoveProduct} sx={{ cursor: "pointer" }}>
              <DeleteOutlineIcon sx={{ color: "#DF6464" }} />
            </Link>
            <Typography sx={{ fontWeight: "600" }}>
              {parseInt(product.product_price) * productQuantity} ₽
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
