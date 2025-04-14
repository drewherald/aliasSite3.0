import { useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar.js';
import { AliasContext } from '../../App.js';
import SubPageTitle from '../../components/SubPageTitle.tsx';
import '../../assets/styles/about/AboutPage.css'
import { Link } from 'react-router-dom';
import globeSmall from "../../assets/photos/globeSmall.png"
import GetToKnow from '../home/GetToKnow.tsx';
import Marquee from "react-fast-marquee";
import AboutItem from '../../components/AboutItem.tsx'
import styles from '../../assets/styles/WhiteFont.module.css'

export default function AboutPage() {

    const AliasGlobal = useContext(AliasContext)

    type AboutItemType = {
      number: string;
      title: string;
      body: string;
  }

    const items: AboutItemType[] = []

    const itemOne = {
      number: '01',
      title: 'Initiate Connection',
      body: `Here, we kick off our journey together with a friendly chat or a face-to-
      face meeting. It's where we begin exchanging ideas and building a strong foundation for our partnership.`
    }

    const itemTwo = {
      number: '02',
      title: 'Craft Visionary Strategies',
      body: `Next, we work closely with you to develop innovative strategies that fit your brand perfectly. We brainstorm 
      ideas and create a roadmap for success. It's where we begin exchanging ideas and building a strong foundation for our partnership.`
    }

    const itemThree = {
      number: '03',
      title: 'Execute Solutions',
      body: `Once the strategy is set, we roll up our sleeves and get to work. Our team brings your vision
       to life with dynamic solutions and creative execution.`
    }

    const itemFour = {
      number: '04',
      title: 'Deliver Impactful Results',
      body: `Finally, it's time to reap the rewards of our collaboration. You'll witness the impact of our 
      efforts as your brand reaches new heights and connects with your audience in meaningful ways.`
    }

    items.push(itemOne)
    items.push(itemTwo)
    items.push(itemThree)
    items.push(itemFour)


  return (
    <section className={`${styles.all} aboutPage`}>
      
      <div className="backgroundImgAboutPage">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='aboutPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'ABOUT US.'} title={'Creating Your Vision.'} />

                
              <img src={globeSmall} alt="" className='globeSmall' id='gsAbt'/>

              <div className='aboutPagePara'>
                <p>We are a creative agency based in Lexington and Nashville. Our team collaborates across
                   various industries, delivering exceptional results with precision. </p>
                  <p>We are dedicated to creating standout experiences, going above and beyond fueled 
                    by our passion and commitment to excellence.</p>
              </div>
            
            <div>
            <Marquee>
              <h1 className="mediaDesignStrategyAbt">OUR PROCESS / OUR PROCESS /</h1>
            </Marquee>
            <Marquee direction="right">
              <h1 className="mediaDesignStrategyTwoAbt">OUR PROCESS / OUR PROCESS /</h1>
            </Marquee>
            

           
            </div>
            <div className='aboutItemContainer'>
            {items.map((item) => <AboutItem contentItem={item}/>)}

            </div>

            <div className='bottomBigLink'>
            <Link to={"/services"} id="bottomBigLink" onClick={AliasGlobal.scrollToTop}> SERVICES.</Link>
            </div>

            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
