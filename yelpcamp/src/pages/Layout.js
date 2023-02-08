import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div
      className={
        pathname !== "/" && "grid grid-rows-[auto_1fr_auto] min-h-screen w-full"
      }
    >
      {pathname !== "/" && <Header />}
      <Outlet />
      {pathname !== "/" && <Footer />}
    </div>
  );
}
