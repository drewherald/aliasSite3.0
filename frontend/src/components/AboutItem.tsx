import '../assets/styles/componentStyles/AboutItem.module.css'

type AboutItemType = {
  contentItem: {
    number: string;
    title: string;
    body: string;
  }
}

const AboutItem: React.FC<AboutItemType> = ({contentItem}) => {


    return (
      <div>
         <>
      <div className='mainAIContainer'>
        <div className='AILeft'>
              <h3>
                  {contentItem.number}.
              </h3>
              <h1>{contentItem.title}</h1>
        </div>
        <div className='AIRight'>
          <p>{contentItem.body}</p>
        </div>
      </div>
      <hr className='aRunner' />
      </>
      </div>
    )
  }

  export default AboutItem;
  