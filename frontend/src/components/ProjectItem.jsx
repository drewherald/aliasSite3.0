import React from 'react'
import ProjectButton from './ProjectButton'
import '../assets/styles/componentStyles/ProjectItem.css'
import { Link } from 'react-router-dom'

export default function ProjectItem({contentItem}) {
  return (
    <>
        <hr className='projRunner' />

        <div className='projectSubtitles'>
          
          { contentItem.id != '' ? 
          
          <Link className='projectTitle' onClick={() =>
            (window.location.href = `/projects/${contentItem.id}`)
          }>{contentItem.name}</Link> :
          <Link className='projectTitle' onClick={() =>
            (window.location.href = `/comingSoon`)
          }>{contentItem.name}</Link>
        
        }
           
            <div className='projectButtons'>
            {contentItem.work.map((item) => <ProjectButton text={item} key={Math.random()}/>)}
            </div>
            <p className='projectYear'>{contentItem.year}</p>
        </div>
    </>

  )
}
