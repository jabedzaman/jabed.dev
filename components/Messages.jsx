import React from 'react'
	
	function Messages(props) {
	    return (
	        <div key={props.id} className="flex flex-col w-full max-w-4xl mx-auto">
	            <p className='text-lg'>
	                {props.message}
	            </p>
	            <p className='text-sm'>
	                {props.name}
	            </p>
	            <p className='text-sm text-gray-400'>
	                {props.timestamp}
	            </p>
	            <hr className='mt-2' />
	        </div>
	    )
	}
	
	export default Messages