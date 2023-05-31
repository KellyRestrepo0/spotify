import { History } from "../History/History";
import { Members } from "../Members/Members";
import { Carousel } from "../Carousel/Carousel";
import "./Home.css";

export function Home() {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section>
        <History />
      </section>
      <section >
        <Members />
      </section>
    </>
  );
}
