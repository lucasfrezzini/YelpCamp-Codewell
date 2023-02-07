import icon_chat from "../assets/img/icon_chatBubble.svg";

export default function Button(props) {
  const { title, icon, colors, width, responsive } = props;
  let styles;
  colors == true
    ? (styles = " bg-black text-white ")
    : (styles = " bg-transparent text-black ");
  width == true
    ? (styles = styles + " w-full justify-center")
    : (styles = styles + "");

  return (
    <button
      className={`group flex py-4 px-5 font-semibold border rounded-md ${styles} ${responsive}`}
    >
      {icon && (
        <img
          className="mr-3 transition-all duration-300 group-hover:mr-4"
          src={icon_chat}
        />
      )}{" "}
      {title}
    </button>
  );
}
