import '../assets/styles/componentStyles/PackageItem.module.css'
import bulletArrow from '../assets/photos/bulletArrow.png'

type PackageItemType = {
  contentItem: {
    number: string;
    title: string;
    header: string;
    body1: string;
    includes: string[];
  };
  
}

 const PackageItem:React.FC<PackageItemType> = ({contentItem}) => {
  return (
    <div>
       <>
    <div className='mainPIContainer'>
      <div className='PILeft'>
            <h3>
                {contentItem.number}.
            </h3>
            <h1>{contentItem.title}</h1>
      </div>
      <div className='PIRight'>
        <h3>{contentItem.header}</h3>
        <br />
        <p>{contentItem.body1}</p>
        <br />
        <p>Includes:</p>
        <div className='includeList'>
            {contentItem.includes.map((item) => <span><img src={bulletArrow} className='bulletArrow'/><p>{item}</p></span> )}
        </div>
      </div>
    </div>
    <hr className='pRunner' />
    </>
    </div>
  )
}

export default PackageItem;