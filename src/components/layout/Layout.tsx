import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="w-full m-0 mx-auto lg:max-w-lg">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
