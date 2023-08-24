import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/loginPage";
import { RegisterPage } from "../pages/RegisterPage/registerPage";
import { DashboardPage } from "../pages/DashboardPage/dashboardPage";
import { ErrorPage } from "../pages/ErrorPage/errorPage";
import { PrivateRoutes } from "./PrivateRoutes/privateRoutes";
import { PublicRoutes } from "./PublicRoutes/publicRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <DashboardPage />
            </TechProvider>
          }
        />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
