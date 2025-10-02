import AboutMe from './AboutMe.tsx';
import './App.css'
import MyContactForm from './ContactForm.tsx';
import MyNavBar from './MyNavBar.tsx';
import RenderRepositories from './RenderRepositories.tsx';

function App() {
  return (
    <>
      <MyNavBar />
      <AboutMe />
      <RenderRepositories />
      <MyContactForm />
    </>
  )
}

export default App
