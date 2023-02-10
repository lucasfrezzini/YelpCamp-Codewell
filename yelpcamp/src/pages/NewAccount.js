import Button from "../components/Button";

export default function Login() {
  return (
    <section className="container max-w-2xl m-auto px-4 py-6 lg:px-0">
      <form>
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
    </section>
  );
}
