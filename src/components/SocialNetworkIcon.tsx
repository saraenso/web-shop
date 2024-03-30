import { Box, CardMedia, Link } from "@mui/material";
import { FC } from "react";

interface SocialNetworkIconProps {
  icon: string;
  link: string;
}

export const SocialNetworkIcon: FC<SocialNetworkIconProps> = ({ icon, link }) => {
  return (
    <Box
      sx={{
        borderRadius: 200,
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          transform: "scale(1.2)",
        },
      }}>
      <Link href={link} target='_blank'>
        <CardMedia
          style={{ cursor: "pointer" }}
          component='img'
          image={icon}
          alt='social_network'
        />
      </Link>
    </Box>
  );
};
