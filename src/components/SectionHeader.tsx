import { Typography } from "@mui/material";
import { FC } from "react";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = (props) => {
  return (
    <Typography
      variant='h4'
      sx={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: 20, color: "#838383", m: 2 }}>
      {props.title}
    </Typography>
  );
};
