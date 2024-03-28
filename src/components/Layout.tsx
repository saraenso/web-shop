import { Box, IconButton } from "@mui/material";
import { Logo } from "./Logo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ backgroundColor: "#EAEAEA" }}>
      <Box sx={{ margin: "0 auto", pt: 2, maxWidth: "1135px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Logo />
          <Box>
            <IconButton sx={{ color: "838383" }} onClick={() => {}}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: "838383" }} onClick={() => {}}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ margin: "0 auto", pt: 2, maxWidth: "1110px" }}>{children}</Box>
      </Box>
    </Box>
  );
};
