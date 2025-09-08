import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PageLayout = ({ children }) => (
  <>
    <Header />
    <main className="pt-16 min-h-screen flex flex-col">
      {children}
    </main>
    <Footer />
  </>
);

export default PageLayout;
