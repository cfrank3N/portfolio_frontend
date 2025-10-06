import { RouterProvider } from 'react-router-dom';
import AboutMe from './AboutMe.tsx';
import './App.css'
import MyContactForm from './ContactForm.tsx';
import MyNavBar from './MyNavBar.tsx';
import RenderRepositories from './RenderRepositories.tsx';
import router from './routes.ts';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
