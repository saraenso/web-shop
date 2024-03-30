import { Badge, Box, IconButton, Link } from "@mui/material";
import { Logo } from "./Logo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "@/router/routes";
import { Footer } from "./Footer";
import { useCart } from "@/logic/CardContext";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity ?? 1), 0);
  return (
    <Box>
      <Box
        sx={{
          margin: "0 auto",
          pt: 2,
          minHeight: "100vh",
          maxWidth: "1135px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Logo />
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton onClick={() => {}}>
                <Badge badgeContent={0} color='warning'>
                  <FavoriteBorderIcon sx={{ color: "#838383" }} />
                </Badge>
              </IconButton>
              <Link component={NavLink} to={`${AppRoutes.CART}`}>
                <IconButton onClick={() => {}}>
                  <Badge badgeContent={totalQuantity} color='warning'>
                    <ShoppingCartOutlinedIcon sx={{ color: "#838383" }} />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Box>
          <Box sx={{ margin: "0 auto", pt: 2, maxWidth: "1110px" }}>{children}</Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
