import React from 'react'

const ContactLinks = (props) => {
  return (
    <div className='flex items-center gap-[3vmin] z-[90] cursor-none'>
        <img className='h-[7vmin]' src={`images/${props.logo}.png`} alt=""/><a className='cursor-grab' href={props.link} target='blank'>{props.name}</a>
    </div>
  )
}

export default ContactLinks