import React from "react";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Box } from "@mui/material";
import AppleBYZ from "../assets/apple-byz.png";
import EarPods from "../assets/apple-earpods.png";
import EarPodsInBox from "../assets/apple-earpods-box.png";
import AirPods from "../assets/apple-airpods.png";
import Gerlax from "../assets/gerlax.png";
import Borofone from "../assets/borophone.png";

const sections = [
  {
    section_title: "Наушники",
    products: [
      {
        id: 1,
        product_image: AppleBYZ,
        product_name: "Apple BYZ S852I",
        product_price: "2927",
        product_discount: "3527",
        product_rate: "4.7",
        isAvailable: true,
      },
      {
        id: 2,
        product_image: EarPods,
        product_name: "Apple EarPods",
        product_price: "2327",
        product_discount: null,
        product_rate: "4.5",
        isAvailable: true,
      },
      {
        id: 3,
        product_image: EarPodsInBox,
        product_name: "Apple EarPods",
        product_price: "2327",
        product_discount: null,
        product_rate: "4.5",
        isAvailable: false,
      },
      {
        id: 4,
        product_image: AppleBYZ,
        product_name: "Apple BYZ S852I",
        product_price: "2927",
        product_discount: null,
        product_rate: "4.7",
        isAvailable: true,
      },
      {
        id: 5,
        product_image: EarPods,
        product_name: "Apple EarPods",
        product_price: "2327",
        product_discount: null,
        product_rate: "4.5",
        isAvailable: true,
      },
      {
        id: 6,
        product_image: EarPodsInBox,
        product_name: "Apple EarPods",
        product_price: "2327",
        product_discount: null,
        product_rate: "4.5",
        isAvailable: true,
      },
    ],
  },
  {
    section_title: "Беспроводные наушники",
    products: [
      {
        id: 7,
        product_image: AirPods,
        product_name: "Apple AirPods",
        product_price: "9527",
        product_discount: null,
        product_rate: "4.7",
        isAvailable: true,
      },
      {
        id: 8,
        product_image: Gerlax,
        product_name: "GERLAX GH-04",
        product_price: "6257",
        product_discount: null,
        product_rate: "4.7",
        isAvailable: true,
      },
      {
        id: 9,
        product_image: Borofone,
        product_name: "BOROFONE BO4",
        product_price: "7527",
        product_discount: null,
        product_rate: "4.7",
        isAvailable: true,
      },
    ],
  },
];

export const MainPage = () => {
  return (
    <Box>
      {sections.map((section) => (
        <React.Fragment key={section.section_title}>
          <SectionHeader title={section.section_title} />
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 3 }}>
            {section.products.map((product) => (
              <ProductCard
                key={product.id}
                product_image={product.product_image}
                product_name={product.product_name}
                product_price={product.product_price}
                product_discount={product.product_discount}
                product_rate={product.product_rate}
                isAvailable={product.isAvailable}
              />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};
