import { useContext, useState } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/About.css";
import globeSmall from "../../assets/photos/globeSmall.png";
import aliasStudios from "../../assets/photos/aliasStudios.png";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar.tsx";
import deskMenu from '../../assets/photos/deskMenu.png'
import ServiceButton from "../../components/ServiceButton.tsx";


export default function About() {


  const AliasGlobal = useContext(AliasContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(AliasGlobal.selectedService==null){
      setFormError('Please select one of the 5 white service buttons before clicking "Get Your Custom Plan"')
    }else{
      submitForm()

    }

  }

  const submitForm = async () => {
    try{
      const response = await fetch(
        "https://formspree.io/f/xjvdgrlj",
        {
          method: "POST",
          body: JSON.stringify({ name: name, email: email, comments: "REQUIRED SERVICE: " + AliasGlobal.selectedService + " INFO: " +'' }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if(response.ok){
        setFormSuccess('Thank you! Your response has been recorded and we will reach out to you shortly.')
        resetState()
      }else{ 
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }catch(error){
      console.error('Error during fetch:', error);
    }
    }
   

  const resetState = () => {
    setName("")
    setEmail("")
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
            <h2>We are a creative agency that can build your entire digital footprint. Need a website, logo, or full social media management? We have you covered.</h2>
            <p>Don’t know where to start? Just pick what sounds right, and we’ll take care of the rest.</p>
            <form onSubmit={handleSubmit} className="serviceForm">
                <section className="fiveButtons">
                  {selectedServices.map((service => <ServiceButton text={service}/>))}
                </section>
                
                  <p style={{fontWeight: 700}}>Your Contact Details:</p>
                  <input type="text" id="name" name="name" minLength={2} aria-required placeholder="Name" required className="serviceContactInfo" value={name} onChange={(e) => setName(e.target.value)}/>
                  <input type="email"  id="email" name="email" minLength={2} aria-required  placeholder="E-mail" className="serviceContactInfo" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <button type="submit" style= {{color: 'white'}} className="submitServiceForm">Get Your Custom Plan</button>
                  <p style={{color: 'red', fontSize: '14px'}}>{formError}</p>
                  <p style={{color: 'green', fontSize: '14px'}}>{formSuccess}</p>
            </form>
           </div>

         

         
        </section>
      </div>
    </div>
  );
}
