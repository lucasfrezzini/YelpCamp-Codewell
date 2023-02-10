import Button from "../components/Button";

export default function NewComment() {
  return (
    <main className="container max-w-2xl m-auto px-4 py-6 lg:px-0">
      <form>
        <h1 className=" text-4xl mb-6 md:text-6xl font-bold mt-10">
          Add New Comment
        </h1>
        <label className="block">
          <p className="text-gray-600 text-lg mb-2">Description</p>
          <textarea
            className="DashboardInput"
            rows="6"
            placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
          ></textarea>
        </label>
        <Button colors width title="Add New Comment" />
      </form>
    </main>
  );
}
