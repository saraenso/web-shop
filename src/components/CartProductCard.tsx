import React, { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "@/logic/CardContext";

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
  const [quantity, setQuantity] = React.useState(1);
  const { removeFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveProduct = () => {
    removeFromCart(product.id);
  };

  return (
    <Card
      sx={{
        borderRadius: 5,
        width: "633px",
        p: 1,
        boxShadow: "10px 20px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
            <CardActions disableSpacing>
              <IconButton aria-label='remove item' onClick={handleDecreaseQuantity}>
                <RemoveCircleIcon />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton aria-label='add item' onClick={handleIncreaseQuantity}>
                <AddCircleIcon />
              </IconButton>
            </CardActions>
          </Box>
          <Box sx={{ boxStyles }}>
            <Typography variant='h5' component='h2'>
              {product.product_name}
            </Typography>
            <Typography color='textSecondary'>{product.product_price} ₽</Typography>
          </Box>
          <Box sx={{ boxStyles }}>
            <Button onClick={handleRemoveProduct}>
              <DeleteOutlineIcon />
            </Button>
            <Typography>{parseInt(product.product_price) * quantity} ₽</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
