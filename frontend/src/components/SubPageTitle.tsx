import PageArrow from '../assets/photos/pageArrow.png'
import '../assets/styles/componentStyles/SubPageTitle.css'
import aliasStudios from "../assets/photos/aliasStudios.png";
import { Link } from 'react-router-dom';

type SubPageTitleProps = {
  subtitle: string;
  title: string;
}
const SubPageTitle:React.FC<SubPageTitleProps> = ({subtitle, title}) => {
  return (
    <>
      <div className='subPageTitle'>
      <Link to={"/"} id="a"> 
      <img src={aliasStudios} alt="" className="aliasStudiosMobileSP" />
      </Link>

                <h5>
                    {subtitle}
                </h5>

              
                <h1 style={{margin: '10svh 0 0 0'}}>
                    {title}
                </h1>

                <img src={PageArrow} alt=""  className='pageArrow' style={{padding: '20svh 0 0 0'}}/>
            </div>
    </>
  )
}

export default SubPageTitle;