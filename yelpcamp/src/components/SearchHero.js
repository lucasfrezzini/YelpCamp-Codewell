import Button from "../components/Button";

import icon_search from '../assets/img/icon_search.svg';

export default function SearchHero(props) {
  return (
    <section className="bg-gray-200 p-12 grid md:grid-cols-3 xl:grid-cols-4 rounded">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to YelpCamp!</h1>
        <p className="text-gray-600 mb-4">
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </p>
        <form>
          <label className="md:flex md:flex-1 md:gap-4">
            {/*  */}
            <div className="relative md:grow mb-4 md:mb-0">
              <div className="absolute z-0 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={icon_search} alt="" />
              </div>
              <input
                type="text"
                className="bg-white font-bold pl-10 py-4 block w-full rounded-md border  focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Search for camps"
              />
            </div>
            <Button
              colors
              responsive="!w-full md:!w-fit md:grow-0 self-center"
              title="Search"
            />
          </label>
          <a
            href="#"
            className="text-gray-600 ml-2 mt-4 block font-bold underline"
          >
            Or add your own campground
          </a>
        </form>
      </div>
    </section>
  );
}
