import {useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar.tsx';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle.tsx';
import GetToKnow from '../home/GetToKnow';
import PriceForm from '../../components/PriceForm.tsx';

export default function AboutPage() {

    const AliasGlobal = useContext(AliasContext)




  return (
    <section className='aboutPage'>
      
      <div className="backgroundImgAboutPage">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='aboutPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'NAME YOUR PRICE.'} title={"Let's Get Started"} />

            
            <PriceForm />

            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
