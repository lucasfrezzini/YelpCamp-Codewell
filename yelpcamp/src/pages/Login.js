import Button from "../components/Button";

import logo from "../assets/img/logo.svg";
import icon_user from "../assets/img/icon_userTestimonial.svg";
import icon_arrowLeft from "../assets/img/icon_arrowLeft.svg";

export default function Login() {
  return (
    <section className="grid grid-rows-[auto_1fr_auto] lg:px-0 min-h-screenlg:grid-rows-[88px_minmax(0px,80vh)] lg:grid-cols-2">
      <header className="flex justify-between items-center mx-4 md:mx-8 lg:mx-40">
        <img className="py-12" src={logo} />
        <a href="#" className="flex group">
          <img
            src={icon_arrowLeft}
            className="mr-1 transition-all duration-300 group-hover:mr-3"
          />{" "}
          Back to Campgrounds
        </a>
      </header>
      <form className="mx-4 md:mx-8 lg:m-40 lg:flex lg:justify-center lg:flex-col">
        <h1 className="text-4xl mb-6 md:text-6xl font-bold mt-10">
          Start exploring camps from all around the world.
        </h1>
        <label className="block">
          <span className="text-gray-600">Username or email</span>
          <input
            type="text"
            className="DashboardInput"
            placeholder="lucasfrezzini"
          />
        </label>
        <label className="block">
          <span className="text-gray-600">Password</span>
          <input
            type="password"
            className="DashboardInput"
            placeholder="Enter your password"
          />
        </label>
        <Button colors width title="Login" />
        <p className="text-gray-600 mt-4">
          Not a user yet?
          <a href="#" className="text-sky-500 ml-2 font-bold underline">
            Create an account
          </a>
        </p>
      </form>
      <div className="bg-gray-200 font-bold py-12 mt-12 px-4 lg:flex lg:flex-col lg:justify-center lg:mt-0 md:px-8 lg:p-40 lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:h-screen">
        <h3 className="text-2xl leading-10 md:leading-[3rem] mb-6 md:text-4xl">
          "YelpCamp has honestly saved hours of research time, and the camps on
          here are definitely well picked and added."
        </h3>
        <div className="flex items-center gap-3">
          <img src={icon_user} alt="May Andrews, Professional Hiker" />
          <h4>
            May Andrews <br />{" "}
            <span className="text-gray-600 font-normal">
              Professional Hiker
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
}