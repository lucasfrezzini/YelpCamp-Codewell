import CampComments from "../components/CampComments";
import CampInfo from "../components/CampInfo";
import CampMap from "../components/CampMap";

export default function CampDetail() {
  return (
    <main className="container mx-auto px-4 xl:px-0 lg:grid lg:grid-cols-3 lg:grid- lg:gap-8">
      <section className="lg:order-last lg:col-span-2">
        <CampInfo />
        <CampComments />
      </section>
      <CampMap />
    </main>
  );
}
