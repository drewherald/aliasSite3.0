import { useState } from 'react'
import '../assets/styles/componentStyles/PriceForm.module.css'
import { Link } from 'react-router-dom'

export default function PriceForm() {

    const [userBudget,setUserBudget] = useState<number | undefined>(undefined)
    const [userService, setUserService] = useState<string>('')
    const [output, setOutput] = useState<string>('')
    const [error, setError] = useState<string>('')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        

        if(userBudget === undefined){
            setError('Please provide a budget')
        }else if(userService === ''){
            setError('Please select a service')
        }else{
            calculateService(userBudget, userService)
        }

        setUserBudget(undefined)
        setUserService('')

    }

    const calculateService = (budget: number, service: string) => {
        switch (service){
            case 'socials':
                if(budget <= 250){
                    setOutput('One-time content audit & recommendations.') 
                }else if(budget <= 500){
                    setOutput('5 posts (graphics + captions) + scheduling for one platform.') 
                }else if (budget <= 1000){
                    setOutput('12 posts (graphics + captions) across two platforms + engagement strategy.') 
                }else if(budget <= 2500){
                    setOutput('Full content calendar (20+ posts) across multiple platforms + analytics + ad strategy.') 
                }else{
                    setOutput("Full-service social media management (content creation, posting, engagement, monthly reporting, ad management). Let's chat for more details") 
                }
                break;
            case 'web':
                if(budget <= 250){
                    setOutput('Banner/asset design') 
                }else if(budget <= 500){
                    setOutput('Maintenance to current website - updating logos, text, etc.') 
                }else if (budget <= 1000){
                    setOutput('Single landing page style website design (no development)') 
                }else if(budget <= 2500){
                    setOutput('Basic 1 site landing page design & development ($2500 and up)') 
                }else{
                    setOutput('Fully custom multi-page website with design & development, including basic SEO & mobile optimization.') 
                }
                break;
            case 'logo':
                    if(budget <= 250){
                        setOutput('Simple text-based logo (1 concept, 1 revision).') 
                    }else if(budget <= 500){
                        setOutput('Custom logo with 2 concepts & 2 revisions.') 
                    }else if (budget <= 1000){
                        setOutput('Full brand identity (logo + color palette + typography guide).') 
                    }else if(budget <= 2500){
                        setOutput('Full brand identity + branding assets') 
                    }else{
                        setOutput('Full brand package + in-depth brand strategy, brand guidelines, and premium assets (website assets, ad templates, packaging design).') 
                    }
                    break;
            case 'ads':
                if(budget <= 250){
                    setOutput('Ad account setup + basic campaign recommendations.') 
                }else if(budget <= 500){
                    setOutput('1-week ad campaign management (up to $500 ad spend).') 
                }else if (budget <= 1000){
                    setOutput('2-week campaign with audience targeting & optimization.') 
                }else if(budget <= 2500){
                    setOutput('Full-month ad strategy & execution across multiple platforms.') 
                }else{
                    setOutput('Comprehensive multi-channel ad strategy, ongoing A/B testing, retargeting, and reporting.') 
                }
                break;
            case 'marketing':
                if(budget <= 250){
                    setOutput('One-hour strategy consultation + recommendations.') 
                }else if(budget <= 500){
                    setOutput('Competitive analysis + basic marketing plan.') 
                }else if (budget <= 1000){
                    setOutput('Full marketing strategy with content & ad planning.') 
                }else if(budget <= 2500){
                    setOutput('Custom marketing roadmap + hands-on consulting & execution.') 
                }else{
                    setOutput('Full business marketing overhaul (brand positioning, competitor analysis, multi-channel strategy, execution plan).') 
                }
                break;
            case 'email':
                if(budget <= 250){
                    setOutput('Custom domain registration.') 
                }else if(budget <= 500){
                    setOutput('Custom domain registration and Google workspace setup with up to 3 email addresses.') 
                }else if (budget <= 1000){
                    setOutput('Custom domain setup. Google workspace setup with up to 10 email addresses and monthly maintenance for a small fee.') 
                }else if(budget <= 2500){
                    setOutput('Custom domain setup. Google Workspace setup with up to 20 email addresses and monthly maintenance for a small fee. Shared company Google Drive/Calendar/Meet access. On-demand training and support.') 
                }else{
                    setOutput('Custom domain setup. Google Workspace setup with up to 20 email addresses and monthly maintenance for a small fee. Shared company Google Drive/Calendar/Meet access. On-demand training and support.') 
                }
                break;
            case 'print':
                if(budget <= 250){
                    setOutput('Business card or flyer design (single design, print-ready file).') 
                }else if(budget <= 500){
                    setOutput('Brochure or poster design (2 revisions included).') 
                }else if (budget <= 1000){
                    setOutput('Multi-page booklet or event poster series.') 
                }else if(budget <= 2500){
                    setOutput('Full print campaign (magazine ads, signage, event collateral).') 
                }else{
                    setOutput('Premium print package (custom illustrations, packaging design, billboard or large-scale event branding).') 
                }
                break;
            }
    }

  return (
    <div className='formWrapper'>
      <h1>Alias Studios Name Your Price Tool</h1>
      <form onSubmit={handleSubmit} className='priceForm'>

                <input type='number' name='budget' id='budget' placeholder='Budget ($)' value={userBudget} onChange={(e) => setUserBudget(parseInt(e.target.value))}></input>
                <select name='service' id='service' value={userService} onChange={(e) => setUserService(e.target.value)}>
                    <option value="" disabled selected>Select Required Service</option>
                    <option value="socials">Social Media Management</option>
                    <option value='web'>Website Development/Design</option>
                    <option value='logo'>Logo Design</option>
                    <option value='ads'>Digital Advertising</option>
                    <option value='marketing'>Marketing Strategy</option>
                    <option value='email'>Email Setup w/Custom Domain</option>
                    <option value='print'>Print Media</option>
                    <input type="submit" id="submit-form" value="Submit" className="hidden"/>
                </select>

            </form>
            <label htmlFor="submit-form" tabIndex={0} className='submitText' > <div className='connectWUs' id='priceSubmit'>Submit</div> </label> 

           {output != '' ? <div className='serviceWrapper'><p style={{fontSize: '4svh', fontWeight:'bold'}}>Available Service: <br/><br/> {output}</p>    <Link to={'/contact' }className="connectWUs">  Let's Get To Work!</Link></div>: <p>{error}</p>}
    </div>
  )
}
