import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = async () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id={"123"}
          name={"Neura the brainy explorer"}
          topic={""}
          subject={""}
          duration={0}
          color={""}
          bookmarked={false}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
