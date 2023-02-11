import photo from "../assets/img/camp/mount_ulap.jpg";

export default function CampInfo() {
  return (
    <section className="rounded border p-12 mb-12">
      <img
        src={photo}
        className="w-full h-auto object-contain rounded "
        alt=""
      />
      <header className="flex justify-between my-4">
        <h2 className="font-bold text-xl">Mount Ulap</h2>
        <h4>$169.9 /night</h4>
      </header>
      <p className="text-gray-600 mb-4">
        Next, for the shadow color: in the original shadow, we used the modern
        RGB syntax, which has no commas. But that syntax doesn’t work yet on
        arbitrary values, we need to switch back to the old syntax that uses
        commas and remove any spaces between the numbers.
      </p>
      <h6 className="text-gray-600 italic underline underline-offset-2">
        Submitted by: <span>Andrew Mike</span>
      </h6>
    </section>
  );
}
