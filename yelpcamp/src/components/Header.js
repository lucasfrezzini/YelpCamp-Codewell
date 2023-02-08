import logo from "../assets/img/logo.svg";
import icon_menu from "../assets/img/icon_hamburguerMenu.svg";
import Button from "./Button";

export default function Header() {
  const handleNavbarMobile = () => {
    const navbarMobile = document.querySelector(".navbar-mobile");
    navbarMobile.classList.toggle("hidden");
    navbarMobile.classList.toggle("flex");
  };

  return (
    <nav className="container mx-auto flex items-center relative justify-between px-4 py-6 xl:px-0">
      <div className="flex items-center">
        <a href="#" className="brand ">
          <img
            src={logo}
            alt="YelpCamp is a curated list of the best camping spots on Earth."
            className="mb-1"
          />
          <h2 className="sr-only">YelpCamp</h2>
        </a>
        <a href="#" className="text-gray-600 ml-5 hidden lg:block">
          Home
        </a>
        <a href="#" className="text-gray-600 ml-5 hidden lg:block">
          Campgrounds
        </a>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleNavbarMobile}
          className="rounded bg-gray-200 p-2 lg:hidden"
        >
          <img src={icon_menu} />
        </button>
        <a href="#" className="text-gray-600 mx-4 hidden lg:block">
          Login
        </a>
        <Button
          title={"Create an Account"}
          responsive={" hidden lg:block "}
          colors
        />
      </div>
      <div className="navbar-mobile bg-white flex-col pb-4 px-4 absolute top-[88px] left-0 w-full hidden lg:hidden">
        <a href="#" className="text-gray-600 active my-2">
          Home
        </a>
        <a href="#" className="text-gray-600 my-2">
          Campgrounds
        </a>
        <a href="#" className="text-gray-600 mt-2 py-4 border-t-2">
          Login
        </a>
        <Button title={"Create an Account"} colors width />
      </div>
    </nav>
  );
}
