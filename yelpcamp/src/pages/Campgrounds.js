import CampCard from "../components/CampCard";

//example prop photo
import photo from "../assets/img/camp/mount_ulap.jpg";
import SearchHero from "../components/SearchHero";

export default function Campgrounds() {
  return (
    <main className="container mx-auto px-4 xl:px-0">
      <SearchHero />

      <section className="my-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
        <CampCard
          title="Mount Ulap"
          description="One of the most famous hijes in Benguet is Mt Ulap in Itogon."
          photo={photo}
        />
      </section>
    </main>
  );
}
