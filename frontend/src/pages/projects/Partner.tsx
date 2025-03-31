import { useContext }  from 'react';
import TopBar from '../../components/TopBar';
import { Link } from 'react-router-dom';
import { AliasContext } from '../../App';
import { useParams } from 'react-router-dom'
import GetToKnow from '../home/GetToKnow';
import '../../assets/styles/projects/Partner.module.css';
import theBurlOne from "../../assets/photos/partners/theBurlOne.png";
import theBurlTwo from "../../assets/photos/partners/theBurlTwo.png";
import theBurlThree from "../../assets/photos/partners/theBurlThree.png";
import back2YouOne from "../../assets/photos/partners/back2YouOne.png";
import fouchOne from "../../assets/photos/partners/fouchOne.png";
import fouchTwo from "../../assets/photos/partners/fouchTwo.png";
import distilleryOne from "../../assets/photos/partners/distilleryOne.png";
import distilleryTwo from "../../assets/photos/partners/distilleryTwo.png";
import ProjectButton from '../../components/ProjectButton';

export default function Partner() {


    const {id} = useParams();

    const AliasGlobal = useContext(AliasContext)


    const partnerContainer = [
        {
            id: 'theburl',
            title: "The Burl",
            flavorTextOne: "The Burl, a cornerstone of Lexington’s music scene, is a celebrated venue that combines historic charm with a commitment to showcasing exceptional talent. Renowned for its intimate atmosphere and eclectic lineup, The Burl serves as a hub for local and national artists, creating unforgettable experiences for music lovers. With its unique blend of innovation and authenticity, The Burl stands as a testament to Lexington’s rich cultural heritage, offering a space where creativity and community come together in perfect harmony.",
            flavorTextTwo: "Alias Studios partnered with The Burl to transform its digital presence through innovative website design, animation, and UX/UI development, capturing the venue’s historic charm and vibrant culture. Our team crafted a visually immersive, user-friendly platform that highlights upcoming events, artist profiles, and ticketing options while incorporating custom animations to bring The Burl’s unique atmosphere to life. By blending strategic design with seamless functionality, we enhanced The Burl’s online visibility, solidifying its reputation as a cornerstone of Lexington’s music and community scene.",
            year: "2024",
            photoOne: theBurlOne,
            photoTwo: theBurlTwo,
            photoThree: theBurlThree,
            work: ['A/V Production', 'Web Design', 'UX/UI Design', 'Graphic Design'],
        },
        {
            id: 'back2you',
            title: "Back To You Podcast",
            flavorTextOne: "Back 2 You Podcast, hosted by the dynamic duo Kathryn Tappen and Darren Pang, brings audiences an engaging mix of sports, entertainment, and personal stories from some of the biggest names in the industry. Since its launch, the podcast has carved out a space where athletes, actors, Olympians, and music legends share their journeys, offering listeners a unique blend of insight, humor, and behind-the-scenes moments. With an authentic and conversational style, Back 2 You Podcast goes beyond the headlines, giving fans a deeper connection to their favorite personalities and the stories that shaped them",
            flavorTextTwo: "Alias Studios partnered with Back 2 You Podcast to create a distinct and engaging brand identity that sets the stage for its growth. We developed a custom logo featuring caricatures of hosts Kathryn Tappen and Darren Pang, capturing their personalities in a fun and memorable way. To establish a cohesive digital presence, we designed social media graphics, highlight covers, and a profile picture, ensuring a polished and professional look across platforms. This starter brand package provided Back 2 You Podcast with the foundation needed to connect with audiences and build a recognizable presence in the competitive podcasting space.",
            year: "2023",
            photoOne: back2YouOne,
            photoTwo: null,
            photoThree: null,
            work: ['Branding', 'Content Creation', 'Art Direction', 'Brand Guideline'],
        },
        {
            id: 'fouchrealestate',
            title: "Foutch Real Estate",
            flavorTextOne: "Foutch Real Estate is a trusted real estate brand built on principles of expertise, dedication, and client-focused service. ",
            flavorTextTwo: "Alias Studios partnered with Foutch Real Estate to elevate its digital presence and connect with buyers and sellers of land and luxury properties in Oklahoma City. Through strategic social media management, content creation, and targeted Meta advertising, we developed a cohesive brand identity and implemented data-driven audience targeting and retargeting strategies. Our approach helped Foutch Realty increase visibility and generate quality leads in the competitive OKC real estate market",
            year: "2023",
            photoOne: fouchOne,
            photoTwo: fouchTwo,
            photoThree: null,
            work: ['Digital Advertising', 'Content Creation', 'Branding'],
        },
        {
            id: 'distillerybottlers',
            title: "Distillery District Bottlers",
            flavorTextOne: "Distillery District Bottlers crafts and bottles premium spirits while helping new brands bring their creations to market. Alias Studios elevated their brand with custom label and package design, a dynamic website, and engaging social media content.",
            flavorTextTwo: null,
            year: "2023",
            photoOne: distilleryOne,
            photoTwo: distilleryTwo,
            photoThree: null,
            work: ['Branding', 'Social Media', 'Illustration', "Graphic Design"], 
        }
    ]

    const usedPartner = partnerContainer.find((element) => element.id === id)


  return (
    <section className='partner'>
       <div className='partnerPageContent'>
           
                <TopBar
                    className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
                />
           
              
            
            
            <div id='partnerInfo'>
                <h1 className='partnerTitle'>{usedPartner?.title}</h1>
                <p className='partnerFlavor'>{usedPartner?.flavorTextOne}</p>
               
            </div>

            <p className='partnerYear'>C {usedPartner?.year}</p>

            <div className='partnerPhotoContainer'>
                <img src={usedPartner?.photoOne} className='partnerPagePhoto'></img>
            </div>

            <div id='partnerInfo'>
                {usedPartner?.flavorTextTwo ?  <p className='partnerFlavor'>{usedPartner?.flavorTextTwo}</p> : ""}
                  <div className='projectButtonsPartner'>
                            {usedPartner?.work.map((item) => <ProjectButton text={item}/>)}
                </div>
            </div>
            <div className='partnerPhotoContainer'>
            <img src={usedPartner?.photoTwo} className='partnerPagePhoto'></img>
            <img src={usedPartner?.photoThree} className='partnerPagePhoto'></img>
            </div>
            <hr className='partnerRunner' />
            <div className='bottomBigLinkPartner'>
                    <Link to={"/projects"} id="bottomBigLink" onClick={AliasGlobal.scrollToTop}> BACK TO PROJECTS.</Link>
                </div>
      
                 
                  
                  <div>
                    <GetToKnow />
                  </div>
                  
              </div>
    </section>
  )
}
