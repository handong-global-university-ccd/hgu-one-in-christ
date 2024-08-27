import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="w-full m-0 mx-auto xl:max-w-Xl ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
