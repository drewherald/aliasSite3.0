import React,  {useContext} from 'react'
import { AliasContext } from '../App';



export default function ProjectButton({text}) {

    const AliasGlobal = useContext(AliasContext)


    const setTag = (tag) => {

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
