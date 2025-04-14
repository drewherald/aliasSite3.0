import { useContext } from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import '../../assets/styles/comingSoon/comingSoon.css'
import TopBar from '../../components/TopBar.tsx';
import { AliasContext } from '../../App';
import ContactUs from '../home/ContactUs.tsx'
import '../../assets/styles/contact/ContactPage.css'
import styles from '../../assets/styles/WhiteFont.module.css'


export default function ContactPage() {
  const AliasGlobal = useContext(AliasContext)


  return (
    <section className={`${styles.all} contactContainer`}>

        <div className="backgroundImgContact">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='contactContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

        <ContactUs />
          
        </div>
        
    </section>
  )
}
