import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import TopWorks from "../components/TopWorks";

const HomePage = () => {
    return (<>
        <Navbar />
        <HomeHero />
        <AboutSection />
        <TopWorks />
        <ContactSection />
        <Footer />
    </>);
}
 
export default HomePage;