import {useContext} from 'react'
import { AliasContext } from '../App';

type ProjButtonText = {
  text: string
}

const ProjectButton:React.FC<ProjButtonText> = ({text}) =>{

    const AliasGlobal = useContext(AliasContext)


    const setTag = (tag: string) => {

      if(AliasGlobal.projectTag === text){
        AliasGlobal.newTag(null)
      }else{
        AliasGlobal.newTag(tag)
      }
    }

  return (
    <div id='projButtn' className={AliasGlobal.projectTag === text ? 'projButtonClicked' : ''} onClick={() => {setTag(text)}} style={{borderRadius: '20px', display: 'inline', border: '2px solid white', backgroundColor: '#100F14', fontFamily: 'Helvetica, sans-serif', fontSize: '1.5svh', padding: '8px 15px',}}>
      {text}
      {AliasGlobal.projectTag === text ? <span className='xButtonProjButton' style={{paddingLeft: '15px'}}>x</span> : ''}
    </div>
  )
}

export default ProjectButton;
