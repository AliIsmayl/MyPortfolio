
import './App.css'
import Navbar from './Layout/Navbar'
import HomePage from './Pages/HomePage'
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import FeedBackPage from './Pages/FeedBackPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PorfolioPage from './Pages/PorfolioPage';
import ResumePage from './Pages/ResumePage';
import ServicesPage from './Pages/ServicesPage';
import ChangeColorBox from './Components/ChangeColorBox';

function App() {

  return (
    <div className='app'>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            backgroundColor: "var(--mode-color-3)",
            color: "var(--mode-color-1)",
            border: '2wpx solid var(--mode-color-1)'
          },
        }}
      />
        <ChangeColorBox/>

      <BrowserRouter>
        <Navbar FeedBack={"FeedBack"} />
          {/* <a href="#FeedBack">s</a> */}
        <div path={"Home"} id='Home'><HomePage /></div>
        <div path={"FeedBack"} id='Feedack'><FeedBackPage /></div>
        {/* <div path={"Contact"} id='Contact'><ContactPage /></div>
        <div path={"About"} id='About'><AboutPage /></div>
        <div path={"Porfolio"} id='Porfolio'><PorfolioPage /></div>
        <div path={"Resume"} id='Resume'><ResumePage /></div>
        <div path={"Services"} id='Services'><ServicesPage /></div> */}
      </BrowserRouter>
    </div>
  )
}

export default App
