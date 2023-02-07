import logo from "../assets/img/logo.svg";
import icon_menu from "../assets/img/icon_hamburguerMenu.svg";
import Button from "./Button";

export default function Header() {
  return (
    <nav className="container mx-auto flex items-center relative justify-between px-4 py-6 lg:px-0">
      <div className="flex items-center">
        <a href="#" className="brand mr-5">
          <img src={logo} />
          <h2 className="sr-only">YelpCamp</h2>
        </a>
        <a href="#" className="text-gray-600 mt-px hidden lg:block">
          Home
        </a>
      </div>
      <div className="flex items-center">
        <button className="bg-gray-200 rounded p-2">
          <img src={icon_menu} />
        </button>
        <a href="#" className="text-gray-600 mt-px mx-4 hidden lg:block">
          Login
        </a>
        <Button
          title={"Create an Account"}
          responsive={" hidden lg:block "}
          colors
        />
      </div>
      <div className="navbar-mobile absolute top-0 right-0">
        <a href="#" className="text-gray-600 mt-px hidden lg:block">
          Home
        </a>
      </div>
    </nav>
  );
}
