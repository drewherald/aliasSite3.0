import React,  {useContext} from 'react'
import { AliasContext } from '../App';



export default function ServiceButton({text}) {

    const AliasGlobal = useContext(AliasContext)


    const setService = (service) => {

      if(AliasGlobal.selectedService === text){
        AliasGlobal.newService(null)
      }else{
        AliasGlobal.newService(service)
      }
    }

  return (
    <div className={AliasGlobal.selectedService === text ? 'servButtonClicked servButton' : 'servButton'} id={text === 'Not Sure' ? 'fifthService' : 'servBtnId'} onClick={() => {setService(text)}} style={{borderRadius: '20px', display: 'inline', border: '2px solid white', color: 'black', backgroundColor: 'white', fontFamily: 'Helvetica, sans-serif', padding: '8px 15px',}}>
      {text}
      {AliasGlobal.selectedService === text ? <span className='xButtonProjButton' style={{paddingLeft: '15px'}}>x</span> : ''}
    </div>
  )
}
