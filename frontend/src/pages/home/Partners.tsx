import '../../assets/styles/home/Partners.module.css'
import PartnerBox from '../../components/PartnerBox.tsx'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AliasContext } from '../../App';
export default function Partners() {

    const AliasGlobal = useContext(AliasContext);

    type PartnerType = {
        name: string;
        refKey: number;
        id: string;
    }

    const partners: PartnerType[] = [
        {
            name: 'Nevada',
            refKey: 1,
            id: 'back2you'
        },
        {
            name: 'Oklahoma',
            refKey: 2,
            id: 'fouchrealestate'
        },
        {
            name: 'Kentucky',
            refKey: 3,
            id: 'theburl'
        }
    ]


  return (
    <>

<hr className='deskRunner' />

        
        <div className='partnerTopContainer'>
                {partners.map((partner) => (
                    <PartnerBox name={partner.name} refKey={partner.refKey} id={partner.id}  key={uuidv4()}/>
                ))}            
        </div>
        
        <div className='seeMoreContainer'>
            <Link to={'/projects'} className="seeMore" onClick={AliasGlobal.scrollToTop}>
                See More
            </Link>
        </div>
        <hr className='hRunner' />

    </>
  )
}
