import { useState, createContext } from 'react'
import "./assets/styles/App.module.css";
import Home from "./pages/home/Home";
import ComingSoon from './pages/comingSoon/ComingSoon';
import Services from './pages/services/Services'
import { Route, Routes } from "react-router-dom";
import MenuMobile from './components/MenuMobile';
import ContactPage from './pages/contact/ContactPage';
import Packages from './pages/packages/Packages';
import Projects from './pages/projects/Projects';
import AboutPage from './pages/about/AboutPage';
import NameYourPrice from './pages/nameYourPrice/NameYourPrice';
import Partner from './pages/projects/Partner';

type ThemeContextProps = {
  menuStatus: boolean;
  projectTag?: string | null;
  selectedService?: string | null;
  toggleMenu: () => void;
  scrollToTop: () => void;
  newTag: (tag: string | null) => void;
  newService: (service: string | null) => void;
}

export const AliasContext = createContext<ThemeContextProps>({
  menuStatus: false,
  projectTag: null,
  selectedService: null,
  toggleMenu: () => {},
  scrollToTop: () => {},
  newTag: () => {},
  newService: () => {}
})

function App() {


  const [menuStatus, setMenuStatus] = useState(false);

  const [projectTag, setProjectTag] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const newTag = (tag: string | null) => {
    setProjectTag(tag)
  }

  const newService = (service: string | null) => {
    setSelectedService(service)
  }

  return (
    <>
    <AliasContext.Provider value = {{menuStatus, projectTag, selectedService, toggleMenu, scrollToTop, newTag, newService}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/comingSoon' element={<ComingSoon />} />
        <Route path='/nameYourPrice' element={<NameYourPrice />} />
        <Route path='/projects/:id' element={<Partner />} />
      </Routes>
      <MenuMobile />
    </AliasContext.Provider>
    </>
  );
}

export default App;
