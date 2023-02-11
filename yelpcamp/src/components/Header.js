import logo from "../assets/img/logo.svg";
import icon_menu from "../assets/img/icon_hamburguerMenu.svg";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  const handleNavbarMobile = () => {
    const navbarMobile = document.querySelector(".navbar-mobile");
    navbarMobile.classList.toggle("hidden");
    navbarMobile.classList.toggle("flex");
  };

  return (
    <nav className="container mx-auto flex items-center relative justify-between px-4 py-6 xl:px-0">
      <div className="flex items-center">
        <NavLink to="/" className="brand ">
          <img
            src={logo}
            alt="YelpCamp is a curated list of the best camping spots on Earth."
            className="mb-1"
          />
          <h2 className="sr-only">YelpCamp</h2>
        </NavLink>
        <NavLink to="/" className="text-gray-600 ml-5 hidden lg:block">
          Home
        </NavLink>
        <NavLink to="campgrounds" className="text-gray-600 ml-5 hidden lg:block">
          Campgrounds
        </NavLink>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleNavbarMobile}
          className="rounded bg-gray-200 p-2 lg:hidden"
        >
          <img src={icon_menu} />
        </button>
        <NavLink to="dashboard/login" className="text-gray-600 mx-4 hidden lg:block">
          Login
        </NavLink>
        <Button
          title={"Create an Account"}
          responsive={" hidden lg:block "}
          colors
        />
      </div>
      <div className="navbar-mobile bg-white flex-col pb-4 px-4 absolute z-50 top-[88px] left-0 w-full hidden lg:hidden">
        <NavLink to="/" className="text-gray-600 active my-2">
          Home
        </NavLink>
        <NavLink to="campgronds" className="text-gray-600 my-2">
          Campgrounds
        </NavLink>
        <NavLink to="login" className="text-gray-600 mt-2 py-4 border-t-2">
          Login
        </NavLink>
        <Button title={"Create an Account"} colors width />
      </div>
    </nav>
  );
}
