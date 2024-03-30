import { Box, Link } from "@mui/material";
import { Logo } from "./Logo";
import { FooterText } from "./FooterText";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "../assets/Telegram.svg";
import VKIcon from "../assets/VK.svg";
import WhatsAppIcon from "../assets/Whatsapp.svg";
import { SocialNetworkIcon } from "./SocialNetworkIcon";

const social_networks = [
  {
    icon: VKIcon,
    link: "https://vk.com/",
  },
  {
    icon: TelegramIcon,
    link: "https://web.telegram.org/",
  },
  {
    icon: WhatsAppIcon,
    link: "https://web.whatsapp.com/",
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
        boxShadow: "10px 20px 20px rgba(0,0,0,0.05)",
      }}>
      <Logo />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <FooterText footer_text='Избранное' />
        <FooterText footer_text='Корзина' />
        <FooterText footer_text='Контакты' />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <FooterText footer_text='Условия сервиса' />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LanguageIcon />
          <Link
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                color: "#FFA542",
              },
            }}>
            Рус
          </Link>
          <Link
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                color: "#FFA542",
              },
            }}>
            Eng
          </Link>
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
            <SocialNetworkIcon key={index} icon={network.icon} link={network.link} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
