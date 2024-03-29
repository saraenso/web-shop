import { Typography } from "@mui/material";
import { FC } from "react";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: FC<PageHeaderProps> = (props) => {
  return (
    <Typography
      variant='h4'
      sx={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: 20, m: 2 }}>
      {props.title}
    </Typography>
  );
};
