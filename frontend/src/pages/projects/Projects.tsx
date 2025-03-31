import { useContext, useState, useEffect }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar.tsx';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle.tsx';
import '../../assets/styles/projects/Projects.css'
import { Link } from 'react-router-dom';
import GetToKnow from '../home/GetToKnow';
import ProjectItem from '../../components/ProjectItem.tsx';



export default function Projects() {

    type ProjItem = {
        name: string;
        work: string[];
        year: string;
        id: string;
    }

    const AliasGlobal = useContext(AliasContext)

    const [shownItems, setShownItems] = useState<ProjItem[]>([])

    let items: ProjItem[]  = [];

    const itemOne: ProjItem = {
        name: 'The Burl',
        work: ['A/V Production', 'Web Design', 'UX/UI Design', 'Graphic Design'],
        year: '2024',
        id: "theburl"
    }

    const itemTwo: ProjItem = {
        name: 'Back 2 You',
        work: ['Branding', 'Content Creation', 'Art Direction', 'Brand Guideline'],
        year: '2023',
        id: 'back2you'
    }
    
    const itemThree: ProjItem = {
        name: 'Brendan Fouch Realty',
        work: ['Digital Advertising', 'Content Creation', 'Branding', 'Social Media'],
        year: '2024',
        id: 'fouchrealestate'
    }

    const itemNine: ProjItem = {
        name: 'Distillery District Bottlers',
        work: ['Branding', 'Social Media', 'Illustration', 'Graphic Design'],
        year: '2022',
        id: 'distillerybottlers'}

    /*
    const itemFour = {
        name: 'Gator Roofing',
        work: ['Branding', 'Print Media', 'Art Direction'],
        year: '2022',
        id: ''
    }

    const itemFive = {
        name: 'Crescentia Fitness',
        work: ['Print Media', 'Branding', 'Art Direction', 'Graphic Design'],
        year: '2024',
        id: ''
    }

    const itemSix = {
        name: 'Lunchbox',
        work: ['Branding', 'Art Direction', 'Brand Strategy', 'Graphic Design'],
        year: '2021',
        id: ''
    }

    const itemSeven = {
        name: 'Clubhouse',
        work: ['A/V Production', 'Content Creation', 'Graphic Design'],
        year: '2021',
        id: ''
    }

    const itemEight = {
        name: 'Roxy',
        work: ['A/V Production', 'Photography', 'Print Media ', 'Illustration'],
        year: '2021',
        id: ''
    }

 
     */
    
    
    items.push(itemOne)
    items.push(itemTwo)
    items.push(itemThree)
    items.push(itemNine)

    /* 
    
    unused

    items.push(itemFour)
    items.push(itemFive)
    items.push(itemSix)
    items.push(itemSeven)
    items.push(itemEight) */

    useEffect(() => {

        if(AliasGlobal.projectTag !== null){
            items = items.filter(item => item.work.includes(AliasGlobal.projectTag))
        }


        setShownItems(items)


      }, [AliasGlobal.projectTag]);

  return (
    <section className='projects'>
      
      <div className="backgroundImgProjects">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='projectsPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'WORK INDEX.'} title={'Explore Our Projects.'} />

                <div className='projectSubtitles' id='mainProjSub'>
                    <p>{'[CLIENT]'}</p>
                    <p id='projectsWork'>{'[WORK]'}</p>
                    <p>{'[YEAR]'}</p>
                </div>
                {shownItems.map((item) => <ProjectItem contentItem={item} key={item.name}/>)}
                <hr className='projRunner' />


            <div className='bottomBigLink' style={{paddingTop: '20px'}}>
            <Link to={"/services"} id="bottomBigLink" onClick={AliasGlobal.scrollToTop}> SERVICES.</Link>
            </div>
            
            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
