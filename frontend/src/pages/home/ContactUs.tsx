import '../../assets/styles/home/ContactUs.css'
import aliasStudios from "../../assets/photos/aliasStudios.png";
import { Link } from 'react-router-dom';

export default function ContactUs() {




  return (
    <>
            <Link to={'/' } style={{cursor: 'pointer', position: 'absolute', top: '50px'}}>
                <img src={aliasStudios} alt="" className="aliasStudiosMobileCT" />
            </Link>
    <div className="contactForm">
        <h1>
            Let's Work Together
        </h1>
        <form action="https://formspree.io/f/xjvdgrlj" method="POST" id="contactForm">
            <div>
                <input type="text" id="name" name="name" minLength={2} aria-required placeholder="Name" required />
            </div>
            <div>
                <input type="email" id="email" name="email" minLength={2} aria-required placeholder="E-mail" required />
            </div>
            <div>
                <input type="tel" id="phone" name="phone" minLength={9} aria-required placeholder="Phone" />
            </div>
            <div className="live">
                <div className="comments">
                    <textarea name="comments" id="comments" cols={30} rows={1} placeholder="Comments"></textarea>
                </div>
            </div>
            <input type="submit" id="submit-form" value="Submit" className="hidden"/>
        </form>
        <div className='contactInfo'>
            <label htmlFor="submit-form" tabIndex={0} className='submitText'> <div className='connectWUs' >Submit Message</div> </label> 
             
        </div>
    </div>
        
    
    </>
  )
}
