import { useCart } from "@/logic/CardContext";
import { Button, Typography, Box } from "@mui/material";

export const CheckoutIndicator = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.product_price);
    const itemTotal = itemPrice * (item.quantity ?? 1);
    return acc + itemTotal;
  }, 0);

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          borderRadius: 5,
          flexBasis: "100%",
          boxShadow: "10px 20px 10px rgba(0,0,0,0.05)",
          backgroundColor: "#ffffff",
        }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>ИТОГО</Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              ₽ {totalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Button
            variant='contained'
            sx={{
              width: "350px",
              p: 3,
              fontWeight: 600,
              fontSize: 17,
              backgroundColor: "#000000",
              borderRadius: 5,
              textTransform: "none",
              ":hover": {
                backgroundColor: "#000000",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "15px 25px 15px rgba(0,0,0,0.1)",
                  transform: "scale(1.05)",
                },
              },
            }}>
            Перейти к оформлению
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
