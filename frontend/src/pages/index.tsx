import { Header } from "../other/header/header";
import { Wrapper } from "../other/wrapper/wrapper";
import { Offer } from "../other/mainPage/Offer/offer";
import { Service } from "../other/mainPage/Service/service";
import { Advantages } from "../other/mainPage/Advantages/advantages";
import { Work } from "../other/mainPage/work/work";
import { Review } from "../other/mainPage/Review/review";
import { AboutUs } from "../other/mainPage/AboutUs/aboutUs";
import { Training } from "../other/mainPage/Training/training";
import { Video } from "../other/mainPage/Video/video";
import { Blog } from "../other/mainPage/Blog/Blog";
import { Contacts } from "../other/mainPage/Contacts/contacts";
import { Footer } from "../other/footer/footer";


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