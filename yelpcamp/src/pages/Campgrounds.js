import Button from "../components/Button";
import CampCard from "../components/CampCard";

//example prop photo
import photo from "../assets/img/camp/mount_ulap.jpg";


export default function Campgrounds() {
  return (
    <main className="container mx-auto px-4 xl:px-0">
      <section className="bg-gray-200 p-12 grid md:grid-cols-3 xl:grid-cols-4 rounded">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">Welcome to YelpCamp!</h1>
          <p className="text-gray-600">
            View our hand-picked campgrounds from all over the world, or add
            your own.
          </p>
          <form>
            <label className="block">
              <input
                type="text"
                className="bg-white my-4 block w-full rounded-md border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="lucasfrezzini"
              />
            </label>
            <Button colors width title="Search" />
            <a
              href="#"
              className="text-gray-600 ml-2 mt-4 block font-bold underline"
            >
              Or add your own campground
            </a>
          </form>
        </div>
      </section>
      <section className="my-12">
        <CampCard
            title="Mount Ulap"
            description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
            photo={photo}
             />
             <CampCard
            title="Mount Ulap"
            description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
            photo={photo}
             />
      </section>
    </main>
  );
}
