import { Header } from "@/widgets/header/header";
import { Wrapper } from "@/shared/wrapper/wrapper";
import { Offer } from "@/widgets/MainPage/Offer/offer";
import { Service } from "@/widgets/MainPage/Service/service";
import { Advantages } from "@/widgets/MainPage/Advantages/advantages";
import { Work } from "@/widgets/MainPage/Work/work";
import { Review } from "@/widgets/MainPage/Review/review";
import { AboutUs } from "@/widgets/MainPage/AboutUs/aboutUs";
import { Training } from "@/widgets/MainPage/Training/training";
import { Video } from "@/widgets/MainPage/Video/video";
import { Blog } from "@/widgets/MainPage/Blog/Blog";
import { Contacts } from "@/widgets/MainPage/Contacts/contacts";
import { Footer } from "@/widgets/footer/footer";


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