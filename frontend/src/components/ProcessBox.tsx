import one from '../assets/photos/processes/processOne.png'
import two from '../assets/photos/processes/processTwo.png'
import three from '../assets/photos/processes/processThree.png'
import four from '../assets/photos/processes/processFour.png'
import '../assets/styles/componentStyles/ProcessBox.css'

type refKeyType = {
  refKey: number;
}

const ProcessBox:React.FC<refKeyType> = ({refKey}) => {

    let referenceKey = one

  switch(refKey){
    case 2:
      referenceKey = two
      break

    case 3:
        referenceKey = three
        break

    case 4:
        referenceKey = four
        break
  }

  return (

      <div className='processBox'>
        <div>
        < img src={referenceKey} className='processImg' alt="" />

        </div>
        </div>

  )
}

export default ProcessBox;
