import icon_close from "../assets/img/icon_close.svg";

export default function TopAlert() {
  return (
    <div className="container px-4 sm:px-0 flex justify-evenly bg-black py-4">
      <p className="text-white font-semibold text-center">
        This project was made by{" "}
        <a
          href="#"
          target="_blank"
          className="text-blue-300 underline underline-offset-2"
        >
          Colt Steele
        </a>{" "}
        and designed by{" "}
        <a
          href="#"
          target="_blank"
          className="text-blue-300 underline underline-offset-2"
        >
          Codewell
        </a>
      </p>
      <img className="ml-6" src={icon_close} />
    </div>
  );
}
