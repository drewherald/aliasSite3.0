import { useContext } from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import '../../assets/styles/services/services.module.css'
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import ServiceItem from '../../components/ServiceItem';
import { Link } from 'react-router-dom';
import SubPageTitle from '../../components/SubPageTitle';
import GetToKnow from '../home/GetToKnow';

export default function Services() {

const AliasGlobal = useContext(AliasContext)

const items = []

const itemOne = {
    number: '01',
    title: 'DESIGN',
    header: '(Vision + Insight + Innovation) x Marketing = Design',
    body1: 'For each project, we combine technical and methodological skills with creative insight and a profound sensitivity toward content. In our office and in our studio we are able to develop both the executive and the artistic aspects of every project.',
    body2: 'We design one-of-a-kind experiences that attract customers and connect them to the brands, increasing loyalty throughout the whole journey.',
    buzzwords: ['Branding', 'Graphic Design', 'Motion Design', 'Web Design', 'UX/UI Design', 'Art Direction']

}

const itemTwo = {
    number: '02',
    title: 'MEDIA',
    header: '(Strategy x Design) + Creativity = Media',
    body1: `In our approach to media, we merge cutting-edge techniques with strategic thinking and a keen eye for storytelling. Whether in the digital realm or traditional channels, we're dedicated to honing both the technical and narrative aspects of our work.`,
    body2: 'We curate immersive media experiences that engage audiences and leave a lasting impression, amplifying brand presence and fostering meaningful connections across platforms.',
    buzzwords: ['Digital Advertising', 'Print Media', 'Audiovisual Design', 'Content Creation', 'Brand Strategy', 'Web Development']
}

const itemThree = {
    number: '03',
    title: 'STRATEGY',
    header: '(Research + Analysis + Positioning) x Content = Strategy',
    body1: `When it comes to strategy, we blend analytical prowess with visionary thinking and a deep understanding of market dynamics. Whether crafting plans for growth or navigating complex challenges, we're committed to balancing foresight with adaptability`,
    body2: 'We develop strategic roadmaps that drive success, guiding brands toward their goals with precision and agility, and ensuring sustained relevance and impact in an ever-evolving landscape.',
    buzzwords: ['Marketing Strategy', 'Brand Guideline Creation', 'System Architecture', 'User Interface', 'Experience Design', 'E-mail Marketing']
}

items.push(itemOne)
items.push(itemTwo)
items.push(itemThree)


console.log(items.length)

  return (
    <section className='services'>

        <div className="backgroundImgServices">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='servicePageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'WHAT WE DO.'} title={'Elevating Standards of Creativity.'} />

            {items.map((item) => <ServiceItem contentItem={item}/>)}
            <div className='bottomBigLink'>
            <Link to={"/projects"} id="bottomBigLink" onClick={AliasGlobal.scrollToTop}> WORK INDEX.</Link>
            </div>

            <div>
              <GetToKnow />
            </div>
            
        </div>

      


        
    </section>
  )
}
