import Button from "./Button";
import DashboardInput from "./DashboardInput";
import DashboardTextarea from "./DashboardTextarea";

export default function NewCampground() {
  return (
    <section className="container max-w-2xl m-auto px-4 py-6 lg:px-0">
      <h1 className=" text-4xl mb-6 md:text-6xl font-bold mt-10">
        Add New Campground
      </h1>
      <form>
        <DashboardInput
          title="Campground name"
          placeholder="Seven Sister Waterfall"
        />
        <DashboardInput title="Price" type="number" placeholder="$149" />
        <DashboardInput
          title="Image"
          placeholder="https://codeflarelimited.com/react-one-1536x864.jpg"
        />
        <DashboardTextarea
          title="Description"
          placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
        />
        <Button colors width title="Add Campground" />
      </form>
    </section>
  );
}
