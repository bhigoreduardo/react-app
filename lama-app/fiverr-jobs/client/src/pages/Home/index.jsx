import { cards, projects } from "../../utils/data";

import Featured from "./Featured";
import TrustedBy from "./TrustedBy";
import Featureds from "./Featureds";
import Explore from "./Explore";
import CategoryCard from "./CategoryCard";
import ProjectCard from "./ProjectCard";
import Slide from "../../components/Slide";

function Home() {
  return (
    <section className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards?.length > 0 &&
          cards.map((item) => <CategoryCard key={item.id} card={item} />)}
      </Slide>
      <Featureds />
      <Explore />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects?.length > 0 &&
          projects.map((item) => <ProjectCard key={item.id} card={item} />)}
      </Slide>
    </section>
  );
}

export default Home;
