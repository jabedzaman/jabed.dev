import React from 'react' 
import { BsArrowLeft } from 'react-icons/bs';
import Router from 'next/router'

function Backbtn() {
  return (
    <div className='flex flex-row space-x-2 items-center p-2'>
        <BsArrowLeft onClick={() => Router.back()} className='h-3 cursor-pointer '/>
        <p onClick={() => Router.back()} className='text-sm cursor-pointer '>
            Back
        </p>
    </div>
  )
}

export default Backbtn
 