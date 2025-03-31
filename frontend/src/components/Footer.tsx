import '../assets/styles/componentStyles/Footer.css'

export default function Footer() {

    const date = new Date().getFullYear() 

  return (
    <div>
        <p className='aliasFooter'>{date} Alias Media & Design LLC</p>
    </div>
  )
}
