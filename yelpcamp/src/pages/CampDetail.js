import photo from "../assets/img/camp/mount_ulap.jpg";
import Button from "../components/Button";

export default function CampDetail() {
  return (
    <main className="container mx-auto px-4 xl:px-0">
      <section>
        <section className="rounded border p-12 mb-12">
          <img src={photo} className="w-full h-auto object-contain rounded " alt="" />
          <header className="flex justify-between my-4">
            <h2 className="font-bold text-xl">Mount Ulap</h2>
            <h4>$169.9 /night</h4>
          </header>
          <p className="text-gray-600 mb-4">
            Next, for the shadow color: in the original shadow, we used the
            modern RGB syntax, which has no commas. But that syntax doesn’t work
            yet on arbitrary values, we need to switch back to the old syntax
            that uses commas and remove any spaces between the numbers.
          </p>
          <h6 className="text-gray-600">
            Submitted by: <span>Andrew Mike</span>
          </h6>
        </section>
        <section className="rounded border p-12 mb-12">
          <article className=" border-b-2 border-gray-200 mb-8">
            <header className="flex justify-between my-4">
            <h2 className="font-bold text-lg">Adam Jones</h2>
            <h4 className="text-gray-600">14h ago</h4>
          </header>
            <p className="text-gray-600 mb-8">
              Next, for the shadow color: in the original shadow, we used the
              modern RGB syntax, which has no commas.
            </p>
          </article>
          <article className=" border-b-2 border-gray-200 mb-8">
            <header className="flex justify-between my-4">
            <h2 className="font-bold text-lg">Adam Jones</h2>
            <h4 className="text-gray-600">14h ago</h4>
          </header>
            <p className="text-gray-600 mb-8">
              NBut that syntax doesn’t work yet on arbitrary values, we need to
              switch back to the old syntax that uses commas and remove any
              spaces between the numbers
            </p>
          </article>
          <Button colors title="Leave a Review" icon />
        </section>
      </section>
      <section className="rounded border p-12">
        
      </section>
    </main>
  );
}
