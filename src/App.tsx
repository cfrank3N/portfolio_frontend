import './App.css'
import MyContactForm from './ContactForm.tsx';
import MyNavBar from './MyNavBar.tsx';
import RenderRepositories from './RenderRepositories.tsx';

function App() {
  return (
    <>
      <MyNavBar />
      <RenderRepositories />
      <MyContactForm />
    </>
  )
}

export default App
