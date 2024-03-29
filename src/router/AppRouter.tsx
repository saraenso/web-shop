import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { CartPage } from "../pages/CartPage";
import { AppRoutes } from "./routes";
import { Layout } from "../components/Layout";
import { FC } from "react";

export const AppRouter: FC = () => (
  <Routes>
    <Route
      path={AppRoutes.MAIN}
      element={
        <Layout>
          <MainPage />
        </Layout>
      }
    />
    <Route
      path={AppRoutes.CART}
      element={
        <Layout>
          <CartPage />
        </Layout>
      }
    />
    <Route path={AppRoutes.NOT_FOUND} element={<Navigate to={AppRoutes.MAIN} />} />
  </Routes>
);
