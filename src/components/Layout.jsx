import Footer from "./Footer";
import Header from "./Header";

export function Layout({ children }) {
  return (
    <>
      <div
        className="position-fixed top-0"
        style={{ zIndex: 10, width: "100%" }}
      >
        <Header />
      </div>
      <div className="layout">
        {children}
        <Footer />
      </div>
    </>
  );
}
