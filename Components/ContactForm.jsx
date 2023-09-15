import React from 'react'

const ContactForm = (props) => {
  return (
    <form className='z-[90] relative'>
        <label className='absolute top-[50%] translate-y-[-50%] left-[10%]' htmlFor={props.id}>{props.name}</label>
        <input className=' bg-gray-800 border-solid border-[2px] border-orange-400 rounded p-[1vmin]' type="text" id={props.id} required/>
    </form>
  )
}

export default ContactForm