import AboutMe from "./AboutMe";
import MyFooter from "./MyFooter";
import MyNavBar from "./MyNavBar";
import RenderRepositories from "./RenderRepositories";

export default function HomePage() {
    return ( 
        <>
            <MyNavBar />
            <AboutMe />
            <RenderRepositories/>
            <MyFooter/>
        </>
     );
}