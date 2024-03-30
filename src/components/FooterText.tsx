import { Link } from "@mui/material";
import { FC } from "react";

interface FooterTextProps {
  footer_text: string;
}

export const FooterText: FC<FooterTextProps> = (props) => {
  return (
    <Link
      sx={{
        fontWeight: "400",
        fontSize: 17,
        textDecoration: "none",
        color: "inherit",
        p: 1,
        pl: 2,
        pr: 2,
        "&:hover": {
          color: "#FFA542",
        },
      }}
      href='#'>
      {props.footer_text}
    </Link>
  );
};
