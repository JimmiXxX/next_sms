import { Header } from "../widgets/MainPage/header/header";
import { Wrapper } from "../shared/wrapper/wrapper";
import { Offer } from "../widgets/MainPage/Offer/offer";
import { Service } from "../widgets/Service/service";
import { Advantages } from "../widgets/Advantages/advantages";
import { Work } from "../widgets/MainPage/Work/work";
import { Review } from "../widgets/MainPage/Review/review";
import { AboutUs } from "../widgets/AboutUs/aboutUs";
import { Training } from "../widgets/Training/training";
import { Video } from "../widgets/Video/video";
import { Blog } from "../widgets/MainPage/Blog/Blog";
import { Contacts } from "../widgets/MainPage/Contacts/contacts";
import { Footer } from "../widgets/MainPage/footer/footer";


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