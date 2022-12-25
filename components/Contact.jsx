import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'



function Contact() {
    return (
        <section className='max-w-3xl mx-auto p-5 my-10 lg:p-0'>
            <div>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>Contact</h1>
                <p className='text-gray-600 dark:text-gray-400 mt-2'>Feel free to contact me</p>
                <div
                className='flex flex-col space-y-4 mt-8'
                >
                    <TextField
                        id="outlined-multiline-static"
                        label="Name"
                        onChange={console.log('hello')}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Email"
                        onChange={console.log('hello')}
                        className='text-gray-100 dark:text-gray-800'
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        onChange={console.log('hello')}
                    />
                    <Button variant="contained" color="primary">
                        Let&apos;s talk
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Contact