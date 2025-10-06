import AboutMe from "./AboutMe";
import MyContactForm from "./ContactForm";
import MyNavBar from "./MyNavBar";
import RenderRepositories from "./RenderRepositories";

export default function HomePage() {
    return ( 
        <>
            <MyNavBar />
            <AboutMe />
            <RenderRepositories/>
            <MyContactForm/>
        </>
     );
}