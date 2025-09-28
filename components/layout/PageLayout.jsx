import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PageLayout = ({ children }) => (
  <>
    <Header />
    <main
      id="main-content"
      className="pt-16 min-h-screen flex flex-col"
      role="main"
    >
      {children}
    </main>
    <Footer />
  </>
);

export default PageLayout;
