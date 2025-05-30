import '../assets/styles/componentStyles/ServiceItem.css'

type ServiceItemType = {
  contentItem: {
    number: string;
    title: string;
    header: string;
    body1: string;
    body2: string;
    buzzwords: string[];
  }

};

const ServiceItem:React.FC<ServiceItemType> = ({contentItem}) => {
  return (
    <>
    <div className='mainSIContainer'>
      <div className='SILeft'>
            <h3>
                {contentItem.number}.
            </h3>
            <h1>{contentItem.title}</h1>
      </div>
      <div className='SIRight'>
        <h3>{contentItem.header}</h3>
        <br />
        <p>{contentItem.body1}</p>
        <br />
        <p>{contentItem.body2}</p>
        <br />
        <div className='buzzWordBox'>
            {contentItem.buzzwords.map((item) => <h3>{item}</h3>)}
        </div>
      </div>
    </div>
    <hr className='runner' />
    </>
    
  )
}

export default ServiceItem;
