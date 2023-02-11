import Button from "./Button";

export default function CampComments () {
    return(
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
    )
}