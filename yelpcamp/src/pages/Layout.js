import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const routesDifferentLayout = ["/", "/dashboard/new", "/dashboard/login"];
  const differentLayout = routesDifferentLayout.includes(pathname);

  return (
    <div
      className={
        !differentLayout
          ? "grid grid-rows-[auto_1fr_auto] min-h-screen w-full"
          : ""
      }
    >
      {!differentLayout && <Header />}

      <Outlet />

      {!differentLayout && <Footer />}
    </div>
  );
}
