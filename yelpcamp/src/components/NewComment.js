import Button from "./Button";

export default function NewComment() {
  return (
    <section className="container max-w-2xl m-auto px-4 py-6 lg:px-0">
      <h1 className=" text-4xl md:text-6xl font-bold mt-10">Add New Comment</h1>
      <form>
        <label class="block">
          <span class="text-gray-700 text-lg">Description</span>
          <textarea
            class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            rows="6"
            placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
          ></textarea>
        </label>
        <Button colors title="Post Comments" />
      </form>
    </section>
  );
}
