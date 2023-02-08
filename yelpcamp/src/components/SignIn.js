import Button from "./Button";

export default function SignIn() {
  return (
    <section className="container max-w-2xl m-auto px-4 py-6 lg:px-0">
      <h1 className="text-4xl mb-6 md:text-6xl font-bold mt-10">
        Start exploring camps from all around the world.
      </h1>
      <form>
        <label class="block">
          <span class="text-gray-600">Campground name</span>
          <input
            type="text"
            class="
                    mt-1
                    mb-4
                    block
                    w-full
                    rounded-md
                    bg-gray-200
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="Seven Sister Waterfall"
          />
        </label>
        <label class="block">
          <span class="text-gray-600">Price</span>
          <input
            type="number"
            class="
                    mt-1
                    mb-4
                    block
                    w-full
                    rounded-md
                    bg-gray-200
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="$149"
          />
        </label>
        <Button colors width title="Login" />
      </form>
    </section>
  );
}
