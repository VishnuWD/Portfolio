import React from 'react'

const ContactForm = (props) => {
  return (
    <div className='z-[90] relative'>
        <input className=' focus:border-orange-400 focus:border-solid focus:outline-none bg-gray-800 w-[40vmin] border-solid border-[2px] border-orange-400 rounded-xl py-[1vmin] px-[3vmin]' type={props.type} id={props.id} placeholder=' '/>
        <label className='absolute top-[50%] translate-y-[-50%] left-[7%] transition-all cursor-text px-1 rounded' htmlFor={props.id}>{props.name}</label>
    </div>
  )
}

export default ContactForm