import {useContext} from 'react'
import { AliasContext } from '../App';

type ServButtonText = {
  text: string;
  id?: string;
}

const ServiceButton:React.FC<ServButtonText> = ({text = ""}) => {

    const AliasGlobal = useContext(AliasContext)


    const setService = (service: string) => {

      if(AliasGlobal.selectedService === text){
        AliasGlobal.newService(null)
      }else{
        AliasGlobal.newService(service)
      }
    }

  return (
    <div className={AliasGlobal.selectedService === text ? 'servButtonClicked servButton' : 'servButton'} id={text === 'Not Sure' ? `fifthService` : 'servBtnId'} onClick={() => {setService(text)}} style={{borderRadius: '20px', display: 'inline', border: '2px solid white', color: 'black', backgroundColor: 'white', fontFamily: 'Helvetica, sans-serif', padding: '8px 15px',}}>
      {text}
      {AliasGlobal.selectedService === text ? <span className='xButtonProjButton' style={{paddingLeft: '15px'}}>x</span> : ''}
    </div>
  )
}

export default ServiceButton;