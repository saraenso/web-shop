import { Box, Typography } from "@mui/material";
import { Logo } from "./Logo";
import { FooterText } from "./FooterText";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "../assets/Telegram.svg";
import VKIcon from "../assets/VK.svg";
import WhatsAppIcon from "../assets/Whatsapp.svg";

// const footer_text = [
//   {
//     footer_text: "Избранное",
//   },
//   {
//     footer_text: "Корзина",
//   },
//   {
//     footer_text: "Контакты",
//   },
//   {
//     footer_text: "Условия сервиса",
//   },
// ];

const social_networks = [
  {
    icon: VKIcon,
  },
  {
    icon: TelegramIcon,
  },
  {
    icon: WhatsAppIcon,
  },
];

export const Footer = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        mt: 5,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        p: 4,
        display: "flex",
        justifyContent: "space-between",
        bottom: 0,
        position: "static",
      }}>
      <Logo />
      {/* {footer_text.map((text, index) => (
        <FooterText key={index} footer_text={text.footer_text} />
      ))} */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <FooterText footer_text='Избранное' />
        <FooterText footer_text='Корзина' />
        <FooterText footer_text='Контакты' />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <FooterText footer_text='Условия сервиса' />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LanguageIcon />
          <Typography>Рус</Typography>
          <Typography>Eng</Typography>
        </Box>
      </Box>
      <Box sx={{ alignItems: "flex-start" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            alignItems: "center",
          }}>
          {social_networks.map((network, index) => (
            <img key={index} src={network.icon} alt='social_network' />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
