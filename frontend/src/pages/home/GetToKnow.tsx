import '../../assets/styles/home/GetToKnow.module.css'
import backgroundImg from '../../assets/photos/webbackground.jpg'
import globeSmall from '../../assets/photos/globeSmall.png'
import { Link } from 'react-router-dom'

export default function GetToKnow() {
  return (
    <>
      <div className='footContainer'>
          <div className='backgroundImgBottom'>
                <img src={backgroundImg} alt="" />
          </div>
        
      </div>
      <div className='footText'>
        <h5>
          Let's team up.
        </h5>
        <p>
          New idea, project, or website?
        </p>
        <Link to={'/contact' }className="connectWUs">
                Connect!
        </Link>
        <img src={globeSmall} alt="" className='globeSmall' />
    </div>
    </>
    
  )
}
