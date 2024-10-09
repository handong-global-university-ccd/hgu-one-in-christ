import { useLocation } from "react-router";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main className="w-full m-0 mx-auto lg:max-w-lg">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
