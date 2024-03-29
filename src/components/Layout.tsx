import { Badge, Box, IconButton, Link } from "@mui/material";
import { Logo } from "./Logo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "@/router/routes";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
            <Box>
              <IconButton sx={{ color: "838383" }} onClick={() => {}}>
                <Badge badgeContent={2} color='warning'>
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
              <Link component={NavLink} to={`${AppRoutes.CART}`}>
                <IconButton sx={{ color: "838383" }} onClick={() => {}}>
                  <Badge badgeContent={2} color='warning'>
                    <ShoppingCartOutlinedIcon />
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
