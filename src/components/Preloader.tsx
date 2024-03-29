import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const PreloaderStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Preloader = () => {
  return (
    <Box sx={{ PreloaderStyle }}>
      <CircularProgress />
    </Box>
  );
};
