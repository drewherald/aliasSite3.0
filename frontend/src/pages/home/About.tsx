import { useContext, useState } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/About.module.css";
import globeSmall from "../../assets/photos/globeSmall.png";
import aliasStudios from "../../assets/photos/aliasStudios.png";
//import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import deskMenu from '../../assets/photos/deskMenu.png'
import ServiceButton from "../../components/ServiceButton";


export default function About() {


  const AliasGlobal = useContext(AliasContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [info, setInfo] = useState('')
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    if(AliasGlobal.selectedService==null){
      setFormError('Please select one of the 5 white service buttons before clicking "Get Your Custom Plan"')
    }else{
      submitForm()

    }

  }

  const submitForm = async () => {
    const response = await fetch(
      "https://formspree.io/f/xjvdgrlj",
      {
        method: "POST",
        body: JSON.stringify({ name: name, email: email, comments: "REQUIRED SERVICE: " + AliasGlobal.selectedService + " INFO: " +info }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(setFormSuccess('Thank you! Your response has been recorded and we will reach out to you shortly.')).then(resetState())
  }

  const resetState = () => {
    setName("")
    setEmail("")
    setInfo("")
    setFormError("")
    AliasGlobal.newService(null)
  }

  const selectedServices = ['Branding', 'Website', 'Social Media', 'Advertising', 'Not Sure' ]

  return (
    <div
      className={
        "aboutFlex" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")
      }
    >
      <div className="aboutContainer" id="about">
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />
        <div className="titleH1">
          <Link to={"/"} id="a">
          <img src={aliasStudios} alt="" className="aliasStudiosMobile" />
          </Link>
          <h1 className="noscrollH1">DEFINE YOU.</h1>
          <img src={globeSmall} className="globeSmallMobile" alt="" />
          <h5 className="titleSubtext">
          We are a multi-skilled design agency crafting digital brands that innovate, inspire, and engage.
          </h5>
          <Link to={'/about'} className="discoverHow" onClick={AliasGlobal.scrollToTop}>
            Discover How
          </Link>
        </div>


          


        <section
          className={
            "whatWeDo" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")
          }
        >
          <div className="deskMenuContainer">
            <img src={deskMenu} className="deskMenu" alt="" onClick={() => AliasGlobal.toggleMenu()}/>
          </div>
          
          
           <div className="formContainer">
            <h1>Creative Services</h1>
            <p>Don’t know where to start? Just pick what sounds right, and we’ll take care of the rest.</p>
            <form onSubmit={handleSubmit} className="serviceForm">
                <section className="fiveButtons">
                  {selectedServices.map((service => <ServiceButton text={service} id={service}/>))}
                </section>
                
                  <p style={{fontWeight: 700}}>Tell us a little about your vision:</p>
                  <textarea className="visionText" onChange={(e) => setInfo(e.target.value)} value={info} rows={5} placeholder="I want to reach more people... I need a website...I need a fresh brand" required />
                  <p style={{fontWeight: 700}}>Your Contact Details:</p>
                  <input type="text" id="name" name="name" minlength="2 required" placeholder="Name" required className="serviceContactInfo" value={name} onChange={(e) => setName(e.target.value)}/>
                  <input type="email"  id="email" name="email" minlength="2 required" placeholder="E-mail" className="serviceContactInfo" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <button type="submit" className="submitServiceForm">Get Your Custom Plan</button>
                  <p style={{color: 'red', fontSize: '14px'}}>{formError}</p>
                  <p style={{color: 'green', fontSize: '14px'}}>{formSuccess}</p>
            </form>
           </div>

         

         
        </section>
      </div>
    </div>
  );
}
