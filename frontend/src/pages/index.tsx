import { Header } from "../widgets/header/header";
import { Wrapper } from "../shared/wrapper/wrapper";
import { Offer } from "../entities/Offer/offer";
import { Service } from "../entities/Service/service";
import { Advantages } from "../entities/Advantages/advantages";
import { Work } from "../entities/work/work";
import { Review } from "../entities/Review/review";
import { AboutUs } from "../entities/AboutUs/aboutUs";
import { Training } from "../entities/Training/training";
import { Video } from "../entities/Video/video";
import { Blog } from "../entities/Blog/Blog";
import { Contacts } from "../entities/Contacts/contacts";
import { Footer } from "../widgets/footer/footer";


const Index = () => {

    return (
        <>

            <Header/>
            <Wrapper>
                <Offer/>
                <Service/>
                <Advantages/>
                <Work/>
                <Review/>
                <AboutUs/>
                <Training/>
                {/*<Video/>*/ }
                <Blog/>
                <Contacts/>
            </Wrapper>
            <Footer/>
        </>
    );
};

export default Index;