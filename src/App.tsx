import { ReactElement, type FC } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouter } from "./router/AppRouter";

export const App: FC = (): ReactElement => {
  return <AppRouter />;
};
