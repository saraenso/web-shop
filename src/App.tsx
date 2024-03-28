import { type FC } from "react";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MainPage } from "./pages/MainPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
};

export default App;
