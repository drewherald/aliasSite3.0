import ProjectButton from './ProjectButton'
import '../assets/styles/componentStyles/ProjectItem.css'

type ProjItemProp = {
  contentItem: {
    name: string;
    work: string[];
    year: string;
    id: string;
  }
}

const ProjectItem:React.FC<ProjItemProp> = ({contentItem}) => {
  return (
    <>
        <hr className='projRunner' />

        <div className='projectSubtitles'>
          
          { contentItem.id != '' ? 
          
          <div className='projectTitle' onClick={() =>
            (window.location.href = `/projects/${contentItem.id}`)
          }>{contentItem.name}</div> :
          <div className='projectTitle' onClick={() =>
            (window.location.href = `/comingSoon`)
          }>{contentItem.name}</div>
        
        }
           
            <div className='projectButtons'>
            {contentItem.work.map((item) => <ProjectButton text={item} key={Math.random()}/>)}
            </div>
            <p className='projectYear'>{contentItem.year}</p>
        </div>
    </>

  )
}

export default ProjectItem;
