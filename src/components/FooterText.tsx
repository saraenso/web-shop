import { Link } from "@mui/material";
import { FC } from "react";

interface FooterTextProps {
  footer_text: string;
}

export const FooterText: FC<FooterTextProps> = (props) => {
  return (
    <Link
      sx={{
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 17,
        textDecoration: "none",
        color: "inherit",
      }}
      href='#'>
      {props.footer_text}
    </Link>
  );
};
