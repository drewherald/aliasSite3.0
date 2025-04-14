import { useContext } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/Home.css";
import About from "./About";
import Partners from "./Partners.tsx";
import GetToKnow from "./GetToKnow";
import backgroundImg from "../../assets/photos/webbackground.jpg";
import OurProcess from "./OurProcess.tsx";
import OurServices from "./OurServices.tsx";
import styles from '../../assets/styles/WhiteFont.module.css'

export default function Home() {
  const AliasGlobal = useContext(AliasContext);

  return (
    <div className = {`${styles.all} bodyContainer`}>
     

      <div className="backgroundImg">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="homeFlex">
        <section id="home">
          <About />
        </section>
        <section
          id="ourProcess"
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        >
          <OurProcess />
        </section>
        <section
          id="ourService"
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        >
          <OurServices />
        </section>
        <section
          id="partners"
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        >
          <Partners />
        </section>
      </div>
      <section
        id="contact"
        className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
      >
        <GetToKnow />
      </section>
      
    </div>
  );
}
