import { Header, Footer } from "../components/index";

function Layout({ children }) {
  return (
    <div>
      <div className="sticky top-0 z-50 ">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
