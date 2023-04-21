import { History } from "../History/History"
import './Home.css'
import { Members } from "../Members/Members"
import { Carousel } from "../Carousel/Carousel"
export function Home() {
    return (
        <>
        
            <section >
            <Carousel/>
            </section>
            <section>
                <History />
            </section>
            <section>
                <Members/>
            </section>
        </>
    )
}