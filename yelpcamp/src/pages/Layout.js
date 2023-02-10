import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopAlert from '../components/TopAlert';

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
      {/* {pathname === "/campgrounds" && <TopAlert />} */}
      {!differentLayout && <Header />}

      <Outlet />

      {!differentLayout && <Footer />}
    </div>
  );
}
