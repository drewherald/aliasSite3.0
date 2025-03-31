import '../assets/styles/componentStyles/HomePagePackageItem.module.css'
import bulletArrow from '../assets/photos/bulletArrow.png'

type ServiceItemType = {
  contentItem: {
    title: string;
    header: string;
    body1: string;
    includes: string[];
  };
}

const HomePagePackageItem: React.FC<ServiceItemType>  = ({contentItem}) => {
  return (
 
  <>
    <div className='mainHPIContainer'>
           
      
        <h3>{contentItem.header}</h3>
        <h1>{contentItem.title}</h1>
        <br />
        <p>{contentItem.body1}</p>
        <br />
        <p>Includes:</p>
        <div className='includeListH'>
            {contentItem.includes.map((item) => <span><img src={bulletArrow} className='bulletArrow'/><p>{item}</p></span> )}
        </div>
        <hr className='mobRunner' />
    </div>
    </>

  )
}

export default HomePagePackageItem;