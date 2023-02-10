import Button from "../components/Button";

import logo from "../assets/img/logo.svg";
import img_hero from "../assets/img/img_hero.jpg";
import img_hero_xl from "../assets/img/img_hero-xl.jpg";
import icon_checkmark from "../assets/img/icon_checkmark.svg";
import brand_airbnb from "../assets/img/brand_airbnb.svg";
import brand_booking from "../assets/img/brand_booking.svg";
import brand_plumguide from "../assets/img/brand_plumguide.svg";

export default function Home() {
  return (
    <section className="bg-gray-200 min-h-screen lg:grid lg:grid-rows-[88px_minmax(0px,80vh)] lg:grid-cols-2">
      <header className="">
        <img className="py-12 mx-4 md:mx-8 lg:mx-40" src={logo} />
      </header>
      <picture className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:h-screen">
        <source media="(max-width: 1024px)" srcSet={img_hero_xl} />
        <source media="(min-width: 1025px)" srcSet={img_hero} />
        <img
          src={img_hero_xl}
          className="aspect-square object-cover md:w-full md:h-full md:aspect-auto"
          alt="Campground views from the sky"
        />
      </picture>
      <div className="mx-4 md:mx-8 lg:m-40  lg:flex lg:justify-center lg:flex-col">
        <h1 className=" text-4xl md:text-6xl font-bold mt-10">
          Explore the best camps on Earth.
        </h1>
        <p className="text-gray-600 my-3">
          YelpCamp is a curated list of the best camping spots on Earth.
          Unfiltered and unbiased reviews.
        </p>
        <ul className="text-gray-600 list-none">
          <li className="mb-3 flex items-center gap-3">
            <img src={icon_checkmark} className="" />
            Add your own camp suggestions.
          </li>
          <li className="mb-3 flex items-center gap-3">
            <img src={icon_checkmark} className="" />
            Leave reviews and experiencies.
          </li>
          <li className="mb-5 flex items-center gap-3">
            <img src={icon_checkmark} className="" />
            See locations for all camps.
          </li>
        </ul>
        <Button title={"View Campgrounds"} colors />
        <p className="text-gray-600 mt-8 mb-2">Partnered with:</p>
        <div className="flex items-center pb-8">
          <a href="#" target="_blank">
            <img src={brand_airbnb} />
          </a>
          <a href="#" target="_blank">
            <img src={brand_booking} />
          </a>
          <a href="#" target="_blank">
            <img src={brand_plumguide} />
          </a>
        </div>
      </div>
    </section>
  );
}
