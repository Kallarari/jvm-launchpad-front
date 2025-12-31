import { Header } from "../Header";
import { Footer } from "../Footer";
import { LayoutWrapper, MainContent } from "./styles";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

export const MainLayout = () => {
  return (
    <AuthProvider>
      <LayoutWrapper>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </AuthProvider>
  );
};
