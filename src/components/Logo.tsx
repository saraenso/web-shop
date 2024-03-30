import { AppRoutes } from "@/router/routes";
import { Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      component={NavLink}
      to={`${AppRoutes.MAIN}`}
      sx={{ textDecoration: "none", color: "inherit" }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 25,
          color: "inherit",
          transition: "color 0.3s ease-in-out",
          "&:hover": {
            color: "#FFA542",
          },
        }}
        variant='h4'>
        QPICK
      </Typography>
    </Link>
  );
};
