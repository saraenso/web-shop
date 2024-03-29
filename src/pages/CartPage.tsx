import { CartProductCard } from "@/components/CartProductCard";
import { PageHeader } from "@/components/PageHeader";
import { useCart } from "@/logic/CardContext";
import { Box } from "@mui/material";

export const CartPage = () => {
  const { cart } = useCart();
  return (
    <Box>
      <PageHeader title='Корзина' />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {cart.map((product, index) => (
          <CartProductCard key={index} product={product} />
        ))}
      </Box>
    </Box>
  );
};
